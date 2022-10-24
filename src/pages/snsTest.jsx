import React, { useRef } from 'react';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getFeedProduct, postUploadFeed } from '../apis/sns/content';
import SelectBox from '../components/common/SelectBox';
import ImagesView from '../components/seller/products/productsManagement/images/ImagesView';

export default function SnsTest() {
  const [content, setContent] = useState(''); // sns 콘텐츠
  const [tags, setTags] = useState([]); // #hashtag
  const [inputTag, setInputTag] = useState(''); // 입력태그
  const [Images, setImages] = useState([]); // Images
  const [preImages, setPreImages] = useState([]); // Images
  const [productList, setProductList] = useState([]); // tagged product List
  const [nowImageIdx, setNowImageIdx] = useState(0);

  const [modal, setModal] = useState(false);

  // 이미지 전송을 위한 FormData
  let formData = new FormData();

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const submitData = {
    // 상품 정보 데이터 객체화
    feedContent: content,
    feedTag: tags,
  };

  const fileInput = useRef();
  const fileUploadHandler = () => {
    fileInput.current.click();
  };

  const validataionCheck = () => {
    // 유효성 체크
    if (content === '') {
      alert('피드 내용을 입력해주세요');
    } else if (Images.length === 0) {
      alert('업로드 할 이미지를 선택해주세요');
    } else {
      return true;
    }
    return false;
  };

  const uploadFeedBtn = () => {
    if (validataionCheck) {
      // Feed Image 데이터 추가
      for (let i = 0; i < Images.length; i++) {
        formData.append('images', Images[i]);
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
      //   queryClient.invalidateQueries('');
    },
    onError: () => {
      console.log('에러');
    },
  });

  // 상품 미리보기
  const handleChange = e => {
    URL.revokeObjectURL(Images);
    setPreImages([]); // 초기화
    for (let i = 0; i < e.target.files.length; i++) {
      const url = URL.createObjectURL(e.target.files[i]);
      setPreImages(preImages => [url, ...preImages]);
    }
    setImages(e.target.files);
  };

  // ================================ 등록가능상품 useQuery
  const { data: products, isLoading } = useQuery(
    'feedProduct',
    getFeedProduct,
    {
      onSuccess: () => {},
    },
  );
  // ================================

  // ================================ hash tag 추가
  const onKeyPress = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      addHashTag();
    }
  };

  const addHashTag = () => {
    setTags(tags => [inputTag, ...tags]);
    setInputTag(''); // 추가 후 초기화
  };
  // ================================

  // ================================ 상품 등록 띄우기
  const productSelect = idx => {
    setNowImageIdx(idx);
    setModal(true);
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

  return (
    <div>
      <div>
        <h1>등록</h1>
        <input
          type="text"
          placeholder="content"
          onChange={e => setContent(e.target.value)}
        />
        <input
          type="file"
          style={{ display: 'none' }}
          ref={fileInput}
          multiple="multiple"
          onChange={handleChange}
        />
        <button onClick={uploadFeedBtn}>등록</button>
        <button
          onClick={() => {
            fileUploadHandler();
          }}
        >
          이미지 업로드
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="#태그"
          value={inputTag}
          onChange={e => setInputTag(e.target.value)}
          onKeyPress={onKeyPress}
        />
      </div>
      {preImages.map((url, idx) => (
        <img
          src={url}
          alt=""
          key={idx}
          className="productImagePreview"
          onClick={() => productSelect(idx)}
        />
      ))}
      {content}
      {tags.map((tag, idx) => (
        <div key={idx}>#{tag}</div>
      ))}
      {!isLoading && modal && (
        <>
          {products.map((product, idx) => (
            <div key={idx}>
              {product.productName}
              <button onClick={() => productListHandler(product.productId)}>
                선택
              </button>
            </div>
          ))}
        </>
      )}
      <div>
        <h1>수정</h1>
      </div>
    </div>
  );
}
