import React, { useRef, useState } from 'react';
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
} from './mainProductDetailPage.style';
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { Button } from '../../../components/common/Button';
import { getProduct, postAddWish } from '../../../apis/user/product';
import ProductReviewComp from '../../../components/main/products/ProductReview';
import Counter from '../../../components/common/Counter';
import { postAddCart } from '../../../apis/user/cart';
import ProductQnaComp from '../../../components/main/products/ProductQna';
import RatingInputComp from '../../../components/common/Rating';
import ProductMenuTab from '../../../components/main/products/ProductMenuTab';

export default function MainProductDetailPage(props) {
  const params = useParams();

  const inputRef = useRef([]);
  const [quantity, setQuantity] = useState(props.number);

  const {
    isLoading: isGetProductDetailLoading,
    // refetch: getCartistRefetch,
    data: productDetail,
  } = useQuery('getProductDetail', () => getProduct(params.id), {
    refetchOnWindowFocus: true,
    refetchOnMount: true,
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

  const soldoutBtn = () => {
    alert('현재 재고가 부족하여 주문이 불가능합니다');
  };

  const param = useParams();
  const id = param.id;

  const scroll = idx => {
    const x = inputRef.current[idx].offsetTop;
    window.scrollTo({ top: x, left: 0, behavior: 'smooth' });
  };
  console.log(productDetail);
  return (
    <div>
      {!isGetProductDetailLoading && (
        <ProductDetailDiv>
          <ProductTopDiv>
            <ProductTopImgDiv>
              <ProductTopImg
                src={productDetail.productMainImgSrc}
              ></ProductTopImg>
            </ProductTopImgDiv>

            <ProductTopContentDiv>
              <h1>
                <span>{productDetail.sellerName} </span>
                <span>{productDetail.productName}</span>
              </h1>
              <div className="production-item-stats">
                <div className="production-item-stats--icon">
                  <RatingInputComp rate={productDetail.reviewRate} />
                </div>
                <span style={{ fontSize: 'large' }}>
                  &nbsp;&nbsp;{productDetail.reviewCount} 개의리뷰
                </span>
              </div>
              <span className="production-item-price">
                <span>12%</span>
                <span>{productDetail.productPrice}원</span>
              </span>
              <div className="production-selling-header__promotion">
                <div className="production-selling-header__promotion__title-wrap">
                  <span>원산지</span>
                </div>
                <div className="production-selling-header__promotion__content-wrap">
                  <p className="production-selling-header__promotion__entry">
                    <b>{productDetail.productOriginPlace}</b>
                  </p>
                </div>
              </div>
              <div className="production-selling-header__promotion">
                <div className="production-selling-header__promotion__title-wrap">
                  <span>재고 수</span>
                </div>
                <div className="production-selling-header__promotion__content-wrap">
                  <p className="production-selling-header__promotion__entry">
                    <b>{productDetail.productTotalStock}</b>
                  </p>
                </div>
              </div>
              <hr />
              <br />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <Counter value={1} setQuantity={setQuantity} />
                <AiOutlineHeart fontSize="x-large" onClick={addLike} />
                <AiOutlineShoppingCart
                  fontSize="x-large"
                  onClick={e => addCartClick()}
                />
                <Button
                  text={
                    productDetail.productStatus === 'selling'
                      ? '주문하기'
                      : '재고부족'
                  }
                  color={
                    productDetail.productStatus === 'selling'
                      ? '#40AA54'
                      : '#cdcdcd'
                  }
                  width="130px"
                  margin="0"
                  onClick={
                    productDetail.productStatus === 'selling'
                      ? orderCart
                      : soldoutBtn
                  }
                ></Button>
              </div>
            </ProductTopContentDiv>
          </ProductTopDiv>
          <div
            style={{
              top: '0',
              position: 'sticky',
              backgroundColor: '#fff',
              zIndex: '5',
            }}
          >
            <hr />
            <ProductMenuTab scroll={scroll} />
            <hr />
          </div>
          <ProductDetailContentDiv ref={elem => (inputRef.current[0] = elem)}>
            <ProductDetailImgDiv>
              {productDetail.productImageList.map((item, idx) => {
                return <ProductDetailImg src={item.productImgSrc} />;
              })}
            </ProductDetailImgDiv>
          </ProductDetailContentDiv>
          <div ref={elem => (inputRef.current[1] = elem)}>
            <ProductReviewComp
              productDetailId={productDetail.productId}
            ></ProductReviewComp>
          </div>
          <div ref={elem => (inputRef.current[2] = elem)}>
            <ProductQnaComp
              productDetailId={productDetail.productId}
            ></ProductQnaComp>
          </div>
        </ProductDetailDiv>
      )}
    </div>
  );
}
