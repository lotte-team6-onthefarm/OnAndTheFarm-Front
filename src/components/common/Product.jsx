import React from 'react';
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

export default function Product(props) {
  const product = props.product
  const addCart = () => {
    alert('카트에 추가')
  };
  const addLike = () => {
    alert('찜목록에 추가')
  };

  // hook
  const navigate = useNavigate();

  //function
  const updateUrl = id => {
    navigate(`/products/detail/${id}`);
  };

  return (
    <ProductDiv width={props.width}>
      <ProductImgDiv>
        <ProductImg
          src={product.productMainImgSrc}
          alt="onandthefarmlogo"
        ></ProductImg>
        <ProductImgIcons>
          <AiOutlineHeart fontSize="x-large" onClick={addLike}/>
          <AiOutlineShoppingCart fontSize="x-large" onClick={addCart}/>
        </ProductImgIcons>
      </ProductImgDiv>

      <ProductInfoDiv  onClick={() => updateUrl(product.productId)}>
        <p>{product.productName}</p>
        <p>{product.productDetailShort}</p>
        <p>
          <span>{product.productPrice}</span> 원
        </p>
        <p>
          <AiFillStar color="darkorange" /> 4.8(433)
        </p>
        
      </ProductInfoDiv>
    </ProductDiv>
  );
}