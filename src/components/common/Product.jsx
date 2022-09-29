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

export default function Product(props) {
  const addCart = () => {
    alert('카트에 추가')
  };
  const addLike = () => {
    alert('찜목록에 추가')
  };
  return (
    <ProductDiv width={props.width}>
      <ProductImgDiv>
        <ProductImg
          src="https://contents.lotteon.com/itemimage/_v142043/LI/12/06/01/16/35/_1/LI1206011635_1_1.jpg/dims/optimize/dims/resizemc/360x360"
          alt="onandthefarmlogo"
        ></ProductImg>
        <ProductImgIcons>
          <AiOutlineHeart fontSize="x-large" onClick={addLike}/>
          <AiOutlineShoppingCart fontSize="x-large" onClick={addCart}/>
        </ProductImgIcons>
      </ProductImgDiv>

      <ProductInfoDiv>
        <p>[햇살가득] 경북 가정용 햇 사과 3.5kg (20~24과)</p>
        <p>
          <span>34,900</span> 원
        </p>
        <p>
          <AiFillStar color="darkorange" /> 4.8(433)
        </p>
        
      </ProductInfoDiv>
    </ProductDiv>
  );
}