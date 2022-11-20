import React from 'react';
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { postAddCart } from '../../../apis/user/cart';
import { deleteWishList, postAddWish } from '../../../apis/user/product';
import { preLoginUrl } from '../../../recoil';
import { upNumber } from '../../../utils/commonFunction';
import {
  ProductDiv,
  ProductImg,
  ProductImgDiv,
  ProductImgIcons,
  ProductInfoDiv,
} from '../../common/Product.style';
import { MainProductDiv } from '../../main/products/MainProductsPopular.style';
import { IconBox, IconWrapper } from '../../seller/common/Icon.style';

export default function ProductComp(props) {
  const [preUrl, setPreUrl] = useRecoilState(preLoginUrl);
  const userToken = localStorage.getItem('token');

  const product = props.product;
  const addCartClick = id => {
    // 로그인 페이지 보내주기
    if (userToken === null) {
      setPreUrl(window.location.href);
      alert('로그인이 필요한 서비스 입니다.');
      navigate('/login');
      return;
    }
    let cartList = [
      {
        productId: id,
        cartQty: 1,
      },
    ];
    addCart({ cartList: cartList });
  };
  const addLike = () => {
    // 로그인 페이지 보내주기
    if (userToken === null) {
      setPreUrl(window.location.href);
      alert('로그인이 필요한 서비스 입니다.');
      navigate('/login');
      return;
    }
    const data = {
      body: {
        productId: product.productId,
      },
    };
    addWish(data);
  };

  const cancleLike = () => {
    // 로그인 페이지 보내주기
    if (userToken === null) {
      setPreUrl(window.location.href);
      alert('로그인이 필요한 서비스 입니다.');
      navigate('/login');
      return;
    }
    const data = {
      productId: product.productId,
    };
    cancleWish(data);
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

  const { mutate: cancleWish, isLoading: isCancleWishLoading } = useMutation(
    deleteWishList,
    {
      onSuccess: res => {
        alert('찜목록에서 삭제되었습니다');
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
    <MainProductDiv padding={props.padding}>
      <ProductImgDiv
        width={props.width}
        onClick={() => updateUrl(product.productId)}
      >
        <ProductImg src={product.imgSrc} alt="onandthefarmlogo"></ProductImg>

        {product.cartStatus !== undefined && (
          <ProductImgIcons
            productCartStatus={product.cartStatus}
            productWishStatus={product.wishStatus}
          >
            {product.productWishStatus ? (
              <AiOutlineHeart fontSize="x-large" onClick={cancleLike} />
            ) : (
              <AiOutlineHeart fontSize="x-large" onClick={addLike} />
            )}
            <AiOutlineShoppingCart
              fontSize="x-large"
              onClick={e => addCartClick(product.productId)}
            />
          </ProductImgIcons>
        )}
      </ProductImgDiv>
      {product.soldCount !== undefined && (
        <div className="productSoldCountDiv">
          <span>실시간 구매 수 : </span>
          <span className="productSoldCount">{product.soldCount}</span>
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
            {product.reviewCount}
          </div>
        )}
        {product.productCartStatus !== undefined && (
          <div className="productInfoButton">
            <div>무료 배송</div>
            <div>최저가 도전</div>
          </div>
        )}
      </ProductInfoDiv>
    </MainProductDiv>
  );
}
