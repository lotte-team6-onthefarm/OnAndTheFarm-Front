import React, { useRef, useState } from 'react';
import { UserMaxWrapper } from '../../../../styles/theme';
import {
  AddFeedBlock,
  AddFeedNavbar,
  AddFeedWrapper,
  TagWrapper,
} from './AddFeed.styled';
import AddImageUpload from './AddImageUpload';
import Logo from '../../../../assets/logo_green.png';
import { LogoImg } from '../../../main/MainNavbar.style';
import { Link, useNavigate } from 'react-router-dom';
import { GreenButton } from '../../../common/Button.style';
import { useMutation, useQueryClient } from 'react-query';
import { postUploadFeed } from '../../../../apis/sns/content';

export default function AddFeed() {
  const [tags, setTags] = useState([]); // #hashtag
  const [inputTag, setInputTag] = useState('');
  const [content, setContent] = useState(''); // sns 콘텐츠
  const [images, setImages] = useState([]); // Images
  const [preImages, setPreImages] = useState([]); // Images
  const [productList, setProductList] = useState([]); // tagged product List
  const [nowImageIdx, setNowImageIdx] = useState(0);

  // 이미지 전송을 위한 FormData
  let formData = new FormData();

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const submitData = {
    // 상품 정보 데이터 객체화
    feedContent: content,
    feedTag: tags,
  };

  const validataionCheck = () => {
    // 유효성 체크
    if (content === '') {
      alert('피드 내용을 입력해주세요');
    } else if (images.length === 0) {
      alert('업로드 할 이미지를 선택해주세요');
    } else {
      return true;
    }
    return false;
  };

  const uploadFeedBtn = () => {
    console.log(images, content, tags, productList);
    if (validataionCheck) {
      // Feed Image 데이터 추가
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
      // 상품 데이터 추가
      formData.append(
        'data',
        new Blob([JSON.stringify(submitData)], { type: 'application/json' }),
      );
      console.log(submitData, 'submitData');

      formData.append(
        'productData',
        new Blob([JSON.stringify({ feedProductIdList: productList })], {
          type: 'application/json',
        }),
      );
      console.log(productList, 'productList');

      // 상품 추가 API
      uploadFeed(formData);
    }
  };

  // SNS Upload Query
  const { mutate: uploadFeed } = useMutation(postUploadFeed, {
    onSuccess: () => {
      // 상품 리스트 페이지로 이동
      navigate('/sns/mysns');
    },
    onError: () => {
      console.log('에러');
    },
  });

  // 상품 미리보기
  const handleChange = e => {
    if (e.target.files.length > 10) {
      alert('파일의 최대 개수는 10장입니다');
      return;
    }
    URL.revokeObjectURL(images);
    setPreImages([]); // 초기화
    for (let i = 0; i < e.target.files.length; i++) {
      const url = URL.createObjectURL(e.target.files[i]);
      setPreImages(preImages => [url, ...preImages]);
    }
    setImages(e.target.files);
  };

  // ================================ 상품 등록 띄우기
  const productSelect = idx => {
    setNowImageIdx(idx);
  };
  // ================================
  const productListHandler = productId => {
    setProductList([
      // 기존 데이터 보존
      ...productList,
      {
        imageIndex: nowImageIdx,
        productId: productId,
      },
    ]);
  };

  // ================================ hash tag 추가
  const onKeyPress = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      addHashTag();
    }
  };

  const addHashTag = () => {
    setTags(tags => [...tags, inputTag]);
    setInputTag(''); // 추가 후 초기화
  };
  // ================================

  return (
    <>
      <AddFeedNavbar>
        <Link to="/">
          <LogoImg src={Logo} alt="onandthefarmlogo" />
        </Link>
        <GreenButton onClick={uploadFeedBtn}>올리기</GreenButton>
      </AddFeedNavbar>
      <UserMaxWrapper>
        <AddFeedWrapper>
          <AddFeedBlock>
            <h2>피드 업로드</h2>
            <AddImageUpload
              handleChange={handleChange}
              productSelect={productSelect}
              preImages={preImages}
              productListHandler={productListHandler}
            />
            <textarea
              placeholder="피드에 대해 설명해주세요"
              onChange={e => setContent(e.target.value)}
            ></textarea>
            <TagWrapper>
              {tags.map((tag, idx) => {
                return (
                  <div className="addTagList" key={idx}>
                    # {tag}
                  </div>
                );
              })}
              <div className="tagInput">
                #
                <input
                  type="text"
                  placeholder="키워드"
                  value={inputTag}
                  onChange={e => setInputTag(e.target.value)}
                  onKeyPress={onKeyPress}
                />
              </div>
            </TagWrapper>
          </AddFeedBlock>
        </AddFeedWrapper>
      </UserMaxWrapper>
    </>
  );
}
