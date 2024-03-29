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
import { BsTrash } from 'react-icons/bs';
import imageCompression from 'browser-image-compression';
import {
  ProductImg,
  ProductImgDiv,
  ProductInfoDiv,
  SvgDiv,
  TooltipArrowDiv,
  TooltipBoxDiv,
  TooltipContentDiv,
  TooltipDiv,
  TooltipInnerDiv,
} from '../../../../pages/sns/feedDetail/FeedDetail.styled';

export default function AddFeed() {
  const [tags, setTags] = useState([]); // #hashtag
  const [inputTag, setInputTag] = useState('');
  const [content, setContent] = useState(''); // sns 콘텐츠
  const [images, setImages] = useState([]); // Images
  const [preImages, setPreImages] = useState([]); // Images
  const [productList, setProductList] = useState([]); // tagged product List
  const [initProductList, setInitProductList] = useState([]); // init product List
  const [nowImageIdx, setNowImageIdx] = useState(0);
  const [positioinX, setPositionX] = useState(0);
  const [positioinY, setPositionY] = useState(0);
  const [productIdx, setProductIdx] = useState(0);
  const [productInfoList, setProductInfoList] = useState([]);
  const [selectedProductInfo, setSelectedProductInfo] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [selectedList, setSelectedList] = useState(0);
  const [deletedList, setDeletedList] = useState([]);
  const [productInfoBody, setProductInfoBody] = useState([]);
  const [tooltip, setTooltip] = useState(false);

  // 이미지 전송을 위한 FormData
  let formData = new FormData();

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const submitData = {
    // 상품 정보 데이터 객체화
    feedContent: content,
    feedTag: tags,
  };

  const mouseOff = () => {
    setTooltip(false);
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

  const actionImgCompress = async (fileSrc, data) => {
    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: 0.5,
    };
    try {
      // 압축 결과
      let compressedFile;
      // Feed Image 데이터 추가
      for (let i = 0; i < images.length; i++) {
        compressedFile = await imageCompression(images[i], options);
        formData.append('images', compressedFile);
        formData.append('originImages', images[i]);
      }

      // 상품 데이터 추가
      formData.append(
        'data',
        new Blob([JSON.stringify(submitData)], { type: 'application/json' }),
      );
      let productBody = productList.filter(
        product => !deletedList.includes(product.index),
      );
      formData.append(
        'productData',
        new Blob([JSON.stringify({ feedProductIdList: productBody })], {
          type: 'application/json',
        }),
      );

      // 상품 추가 API
      uploadFeed(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadFeedBtn = () => {
    if (validataionCheck) {
      actionImgCompress();
    }
  };

  // SNS Upload Query
  const { mutate: uploadFeed } = useMutation(postUploadFeed, {
    onSuccess: () => {
      // 상품 리스트 페이지로 이동
      navigate(`/sns/0/mysns`);
    },
    onError: () => {
      console.log('에러');
    },
  });

  // SNS 이미지 미리보기
  const handleChange = e => {
    if (e.target.files.length > 10) {
      alert('파일의 최대 개수는 10장입니다');
      return;
    }
    URL.revokeObjectURL(images);
    setPreImages([]); // 초기화
    for (let i = e.target.files.length - 1; i >= 0; i--) {
      const url = URL.createObjectURL(e.target.files[i]);
      setPreImages(preImages => [url, ...preImages]);
    }
    setImages(e.target.files);
  };

  // ================================ 상품 등록 띄우기
  const productSelect = (idx, x, y) => {
    setNowImageIdx(idx);
    setPositionX(x);
    setPositionY(y);
  };
  // ================================
  const productListHandler = (productId, product) => {
    setProductList([
      // 기존 데이터 보존
      ...productList,
      {
        index: productIdx,
        imageIndex: nowImageIdx,
        productId: productId,
        posX: positioinX,
        posY: positioinY,
      },
    ]);
    setProductInfoBody([
      // 기존 데이터 보존
      ...productInfoBody,
      {
        index: productIdx,
        imageIndex: nowImageIdx,
        productId: productId,
        posX: positioinX,
        posY: positioinY,
      },
    ]);
    setInitProductList([
      // 기존 데이터 보존
      ...initProductList,
      {
        index: productIdx,
        imageIndex: nowImageIdx,
        productId: productId,
        posX: positioinX,
        posY: positioinY,
      },
    ]);
    let temp = product;
    temp.index = productIdx;
    setProductInfoList([
      // 기존 데이터 보존
      ...productInfoList,
      temp,
    ]);
    setProductIdx(productIdx + 1);
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
  const deleteProduct = () => {
    setDeletedList([
      // 기존 데이터 보존
      ...deletedList,
      selectedProduct,
    ]);
    mouseOff();
  };

  const selectProductInfo = idx => {
    for (let index = 0; index < productInfoList.length; index++) {
      if (productInfoList[index].index === idx) {
        setSelectedProductInfo(productInfoList[index]);
      }
    }
  };

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
              productList={productList}
              initProductList={initProductList}
              setProductList={setProductList}
              setTooltip={setTooltip}
              setSelectedProduct={setSelectedProduct}
              selectProductInfo={selectProductInfo}
              setSelectedList={setSelectedList}
              deletedList={deletedList}
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
                  placeholder="키워드(Enter)"
                  value={inputTag}
                  onChange={e => setInputTag(e.target.value)}
                  onKeyPress={onKeyPress}
                />
              </div>
            </TagWrapper>
            {tooltip && (
              <TooltipDiv
                data-popout="true"
                style={{
                  position: 'absolute',
                  top: `${productList[selectedList].posY - 68}px`,
                  left: `${productList[selectedList].posX + 63}px`,
                  display: 'flex',
                }}
                onMouseLeave={() => mouseOff()}
              >
                <TooltipBoxDiv>
                  <TooltipInnerDiv>
                    <span
                      axis="1"
                      direction="0,1"
                      overflown="false,false"
                      index="0"
                    >
                      <TooltipContentDiv>
                        <ProductImgDiv>
                          <ProductImg
                            src={
                              productInfoList[selectedList].productMainImgSrc
                            }
                            alt="onandthefarmlogo"
                          ></ProductImg>
                        </ProductImgDiv>
                        <ProductInfoDiv>
                          <div>
                            {productInfoList[selectedList].sellerShopName}
                          </div>
                          <div>{productInfoList[selectedList].productName}</div>
                          <div>
                            {productInfoList[
                              selectedList
                            ].productPrice.toLocaleString()}{' '}
                            원
                          </div>
                        </ProductInfoDiv>
                        <SvgDiv
                          onClick={deleteProduct}
                          style={{ cursor: 'pointer' }}
                        >
                          <div>
                            <BsTrash />
                          </div>
                        </SvgDiv>
                      </TooltipContentDiv>
                    </span>
                  </TooltipInnerDiv>
                  <TooltipArrowDiv></TooltipArrowDiv>
                </TooltipBoxDiv>
              </TooltipDiv>
            )}
          </AddFeedBlock>
        </AddFeedWrapper>
      </UserMaxWrapper>
    </>
  );
}
