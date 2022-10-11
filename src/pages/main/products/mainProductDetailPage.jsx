import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ProductDetailDiv,
  ProductTopDiv,
  ProductTopImgDiv,
  ProductTopImg,
  ProductTopContentDiv,
  ProductDetailContentDiv,
  ProductDetailImgDiv,
  ProductDetailImg,
  ProductReviewDiv,
} from './mainProductDetailPage.style';
import detailImg from '../../../assets/productDetail.png';
import detailBundleImg from '../../../assets/popularBundlePack.png';
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { Button } from '../../../components/common/Button';
import MenuTab from '../../../components/common/MenuTab';
import QnaItemComp from '../../../components/main/qna/QnaItem';
import { getProduct, postAddWish } from '../../../apis/user/product';
import ProductReviewComp from '../../../components/main/products/ProductReview';
import Counter from '../../../components/common/Counter';
import { postAddCart } from '../../../apis/user/cart';
import { postAddQna } from '../../../apis/user/qna';
import ProductQnaComp from '../../../components/main/products/ProductQna';

export default function MainProductDetailPage(props) {
  const params = useParams();

  const [quantity, setQuantity] = useState(props.number);

  const {
    isLoading: isGetProductDetailLoading,
    // refetch: getCartistRefetch,
    data: productDetail,
  } = useQuery('getProductDetail', () => getProduct(params.id), {
    refetchOnWindowFocus: true,
    onSuccess: res => {},
    onError: () => {
      console.log('에러');
    },
  });
  const addCartClick = id => {
    let cartList = [
      {
        productId: productDetail.productId,
        cartQty: quantity,
      },
    ];
    addCart({ cartList: cartList });
  };
  const addLike = () => {
    const data = {
      body: {
        productId: productDetail.productId,
      },
    };
    addWish(data);
  };

  const { mutate: addWish, isLoading: isAddWishLoading } = useMutation(
    postAddWish,
    {
      onSuccess: res => {
        alert('찜목록에 추가되었습니다');
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  const { mutate: addCart, isLoading: isAddCartLoading } = useMutation(
    postAddCart,
    {
      onSuccess: res => {
        alert('장바구니에 추가되었습니다');
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  // hook
  const navigate = useNavigate();

  const orderCart = () => {
    let tempCartItems = [];
    tempCartItems.push({
      ...productDetail,
      productId: productDetail.productId,
      cartQty: quantity,
      productPrice: productDetail.productPrice,
    });
    navigate(`/order`, { state: tempCartItems });
  };
  const items = [
    {
      id: 1,
      name: '천예원',
      content:
        '정말 맛있는데요 ? 우리집 레오는 과일을 안먹는데도 불구하고 옆에서 한입 달라고 애교를 부릴 정도의 당도에요. 재주문의사 무조건 있습니다 ~~!',
      rate: 4,
      date: '12',
      like: '24',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277665/P512007DE92C4154D55ADF24400888FF8E97013E948F47C574A0F9C99D9E24DF9/file/dims/optimize',
    },
    {
      id: 2,
      name: '손은성',
      content:
        '둥글둥글 왕감자 강원도 핵감자 너무 커서 하나를 못 다 먹겠죠 감자 감자 왕감자 참말 참말 좋아요 못 다 먹겠죠 언제다먹나 빨리먹어야지 ~~~',
      rate: 3,
      date: '25',
      like: '13',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277236/P7C67A0F32EC59C38BBC7C73B004388F250AED8CD63AA23D3B80AD2335EA5AE60/file/dims/optimize',
    },
    {
      id: 3,
      name: '최진영',
      content:
        '당근 JMT 나는 당근을 싫어하지만 이 당근은 좋아요. 카레 요리에 넣어먹고, 닭볶음탐에 넣어먹고, 감자채 볶음에도 넣어먹었어요 I like it ~ like it like it ~~~',
      rate: 5,
      date: '25',
      like: '13',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/276873/P75260B86794950F9B3895FCA46D6F5D7ABF08A546585DF0082E2F542351E5B0C/file/dims/optimize',
    },
  ];
  const param = useParams();
  const id = param.id;

  return (
    <div>
      {!isGetProductDetailLoading && (
          <ProductDetailDiv>
          <ProductTopDiv>
            <ProductTopImgDiv>
              <ProductTopImg src={detailImg}></ProductTopImg>
            </ProductTopImgDiv>
            <ProductTopContentDiv>
              <h2>{productDetail.productName}</h2>
              <h5>240 g</h5>
              <h3>
                <span>{productDetail.productPrice}원</span>
              </h3>
              <p>{productDetail.productDetailShort}</p>
              <hr />
              <div style={{ display: 'flex' }}>
                <p>평점</p>
                <p>
                  <AiFillStar color="darkorange" /> 4.8(433)
                </p>
              </div>
              <hr />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Counter value={1} setQuantity={setQuantity} />
                <AiOutlineHeart fontSize="x-large" onClick={addLike} />
                <AiOutlineShoppingCart
                  fontSize="x-large"
                  onClick={e => addCartClick()}
                />
                <Button
                  text="주문하기"
                  color="#40AA54"
                  width="130px"
                  margin="0"
                  onClick={orderCart}
                ></Button>
              </div>
            </ProductTopContentDiv>
          </ProductTopDiv>
          <hr />
          <MenuTab></MenuTab>
          <hr />
          <ProductDetailContentDiv>
            <ProductDetailImgDiv>
              <ProductDetailImg src={detailBundleImg} />
            </ProductDetailImgDiv>
          </ProductDetailContentDiv>
          <ProductReviewComp productDetailId={productDetail.productId}></ProductReviewComp>
          <ProductQnaComp productDetailId={productDetail.productId}></ProductQnaComp>
        </ProductDetailDiv>
        )}
      
    </div>
  );
}
