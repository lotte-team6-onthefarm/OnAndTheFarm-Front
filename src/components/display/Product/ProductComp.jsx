import React from 'react';
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postAddCart } from '../../../apis/user/cart';
import { postAddWish } from '../../../apis/user/product';
import { upNumber } from '../../../utils/commonFunction';
import {
  ProductDiv,
  ProductImg,
  ProductImgDiv,
  ProductImgIcons,
  ProductInfoDiv,
} from '../../common/Product.style';
import { IconBox, IconWrapper } from '../../seller/common/Icon.style';

export default function ProductComp(props) {
  const product = props.product;
  console.log(product);
  const addCartClick = id => {
    let cartList = [
      {
        productId: id,
        cartQty: 1,
      },
    ];
    addCart({ cartList: cartList });
  };
  const addLike = () => {
    const data = {
      body: {
        productId: product.productId,
      },
    };
    addWish(data);
  };

  // hook
  const navigate = useNavigate();

  //function
  const updateUrl = id => {
    navigate(`/products/detail/${id}`);
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
  return (
    <ProductDiv padding={props.padding}>
      <ProductImgDiv
        width={props.width}
        onClick={() => updateUrl(product.productId)}
      >
        <ProductImg
          src={product.productMainImgSrc}
          alt="onandthefarmlogo"
        ></ProductImg>

        {product.productCartStatus !== undefined && (
          <ProductImgIcons
            productCartStatus={product.productCartStatus}
            productWishStatus={product.productWishStatus}
          >
            <AiOutlineHeart fontSize="x-large" onClick={addLike} />
            <AiOutlineShoppingCart
              fontSize="x-large"
              onClick={e => addCartClick(product.productId)}
            />
          </ProductImgIcons>
        )}
      </ProductImgDiv>
      {product.productSoldCount !== undefined && (
        <div className="productSoldCountDiv">
          <span>실시간 구매 수 : </span>
          <span className="productSoldCount">{product.productSoldCount}</span>
        </div>
      )}
      <ProductInfoDiv
        width={props.width}
        onClick={() => updateUrl(product.productId)}
      >
        <p className="productInfoName">{product.sellerName}</p>
        <p className="productInfoTitle">{product.productName}</p>
        {product.productPrice !== undefined && (
          <p>
            <span>{product.productPrice.toLocaleString()} 원</span>
          </p>
        )}
        {product.reviewRate !== undefined && (
          <div className="productInfoBottom">
            <IconWrapper>
              <IconBox>
                <AiFillStar color="#40AA54" />
                <strong>{upNumber(product.reviewRate)}</strong>
              </IconBox>
            </IconWrapper>
            <span>리뷰</span>
            {product.productReviewCount}
          </div>
        )}
        {product.productCartStatus !== undefined && (
          <div className="productInfoButton">
            <div>무료 배송</div>
            <div>최저가 도전</div>
          </div>
        )}
      </ProductInfoDiv>
    </ProductDiv>
  );
}
