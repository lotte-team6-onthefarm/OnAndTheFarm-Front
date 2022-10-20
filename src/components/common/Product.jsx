import React from 'react';
import { useMutation } from 'react-query';
import {
  ProductDiv,
  ProductImgDiv,
  ProductImg,
  ProductInfoDiv,
  ProductImgIcons,
} from './Product.style';
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { postAddWish } from '../../apis/user/product';
import { postAddCart } from '../../apis/user/cart';
import { IconBox, IconWrapper } from '../seller/common/Icon.style';

export default function Product(props) {
  const product = props.product;
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
    // <div class="today-deal-item--wrapper">
    //   <article class="today-deal-item">
    //     <a
    //       className="today-deal-item__overlay"
    //       href="/productions/449750/selling?affect_type=StoreHomeDeal&amp;affect_id=3"
    //     >
    //       test
    //     </a>
    //     <div class="today-deal-item__image">
    //       <div class="today-deal-item__image__item">
    //         <div class="production-item-image">
    //           <img
    //             class="image"
    //             src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166453328991114848.webp?gif=1&amp;w=360&amp;h=360&amp;c=c&amp;q=0.8"
    //             srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166453328991114848.webp?gif=1&amp;w=640&amp;h=640&amp;c=c&amp;q=0.8 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166453328991114848.webp?gif=1&amp;w=720&amp;h=720&amp;c=c&amp;q=0.8 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166453328991114848.webp?gif=1&amp;w=1080&amp;h=1080&amp;c=c&amp;q=0.8 3x"
    //             alt=""
    //           />
    //           <div class="production-item-image__dark-overlay"></div>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="today-deal-item__content">
    //       <div class="today-deal-item__content--wrap">
    //         <h1 class="today-deal-item__header">
    //           <span class="today-deal-item__header__brand">마이센스 </span>
    //           <span class="today-deal-item__header__name">
    //             [오늘의딜]NEW컬러! 고밀도 마이크로 극세사 고정밴딩 침대패드 SS/Q
    //             8colors
    //           </span>
    //         </h1>
    //         <span class="production-item-price">
    //           <span class="production-item-price__rate">
    //             48<span class="percentage">% </span>
    //           </span>
    //           <span class="production-item-price__price">21,900</span>
    //         </span>
    //         <div class="today-deal-item__stats-pc">
    //           <p class="production-item-stats production-item-stats--review">
    //             <svg
    //               class="icon"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               preserveAspectRatio="xMidYMid meet"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 fill-rule="evenodd"
    //                 d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"
    //               ></path>
    //             </svg>
    //             <strong class="avg">4.7</strong> 리뷰 2,239
    //           </p>
    //         </div>
    //         <span class="production-item-badge-list">
    //           <svg
    //             class="icon"
    //             aria-label="무료배송"
    //             width="47"
    //             height="20"
    //             viewBox="0 0 47 20"
    //             preserveAspectRatio="xMidYMid meet"
    //           >
    //             <g fill="none" fill-rule="evenodd">
    //               <rect
    //                 width="47"
    //                 height="20"
    //                 fill="#000"
    //                 fill-opacity=".07"
    //                 fill-rule="nonzero"
    //                 rx="4"
    //               ></rect>
    //               <path
    //                 fill="#757575"
    //                 d="M12.73 5.38v3.96h-6.6V5.38h6.6zm-2.68 9.43H8.76v-3.25H5v-1.03h8.86v1.03h-3.81v3.25zm1.4-6.49V6.41H7.43v1.91h4.04zm11.08 2.7h-1.42v1.54h2.26v1.02h-8.86v-1.02h2.24v-1.53h-1.1V7.78h5.32V6.65H15.6V5.63h6.66V8.8h-5.33v1.18h5.61v1.04zm-4.53 0v1.54h1.87v-1.53H18zm14.37 3.78h-1.23V9.86h-.8v4.49h-1.2V5.18h1.2v3.66h.8V5h1.23v9.8zm-4.2-2.54h-3.9V6.01h1.27v2.26h1.36V6h1.28v6.26zm-1.27-1.01v-2h-1.36v2h1.36zm14.49 1.71c0 1.13-1.25 1.82-3.41 1.82s-3.42-.7-3.42-1.82 1.25-1.82 3.4-1.82c2.18 0 3.43.7 3.43 1.82zm-3.41-6.05c-.5 1.13-2.1 1.9-3.51 2.1l-.54-1c1.64-.17 3.39-1.06 3.39-2.54V5.2h1.33v.28c0 1.48 1.99 2.47 3.4 2.53l-.55 1.01c-1.31-.18-3.03-.97-3.52-2.1zm4.42 3.78h-8.86V9.66h3.79V8.4h1.29v1.26h3.78v1.03zm-2.33 2.27c0-.5-.83-.8-2.1-.8s-2.08.3-2.08.8c0 .51.81.8 2.08.8s2.1-.29 2.1-.8z"
    //               ></path>
    //             </g>
    //           </svg>
    //           <svg
    //             class="icon"
    //             aria-label="특가"
    //             width="30"
    //             height="20"
    //             viewBox="0 0 30 20"
    //             preserveAspectRatio="xMidYMid meet"
    //           >
    //             <rect width="30" height="20" fill="#F77" rx="4"></rect>
    //             <path
    //               fill="#fff"
    //               d="M12.83 7.93v-.97H7.93v-.555h5.228v-.991H6.655v4.063h6.59v-.992H7.928V7.93h4.901zm-6.295 3.747v1.002h5.326v2.037h1.274v-3.04h-6.6zm7.733-.588v-1.024H5.5v1.024h8.768zM23.91 9.782V8.725h-1.405V5H21.24v9.705h1.264V9.782h1.405zm-3.954-3.79h-4.53v1.056h3.147c-.174 1.938-1.623 3.975-3.736 4.945l.773.958c2.974-1.612 4.259-4.03 4.346-6.96z"
    //             ></path>
    //           </svg>
    //         </span>
    //       </div>
    //     </div>
    //   </article>
    // </div>

    <ProductDiv padding={props.padding}>
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
      <ProductImgDiv
        width={props.width}
        onClick={() => updateUrl(product.productId)}
      >
        <ProductImg
          src={product.productMainImgSrc}
          alt="onandthefarmlogo"
        ></ProductImg>
      </ProductImgDiv>

      <ProductInfoDiv
        width={props.width}
        onClick={() => updateUrl(product.productId)}
      >
        <p className="productInfoName">{product.sellerName}</p>
        <p className="productInfoTitle">{product.productName}</p>
        <p>
          <span>{product.productPrice.toLocaleString()} 원</span>
        </p>
        <div className="productInfoBottom">
          <IconWrapper>
            <IconBox>
              <AiFillStar color="#40AA54" />
              <strong>{product.reviewRate}</strong>
            </IconBox>
          </IconWrapper>
          <span>리뷰</span>
          {product.productReviewCount}
        </div>
        <div className="productInfoButton">
          <div>무료 배송</div>
          <div>최저가 도전</div>
        </div>
      </ProductInfoDiv>
    </ProductDiv>
  );
}
