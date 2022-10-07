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

export default function Product(props) {
  const product = props.product
  const addCartClick = (id) => {
    let cartList = [{
      productId: id,
      cartQty: 1,
    }];
    addCart({ cartList: cartList });
  };
  const addLike = () => {
    const data = {
      body: {
        "productId" : product.productId
    }
    }
    addWish(data)
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
        alert('찜목록에 추가되었습니다')
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  const { mutate: addCart, isLoading: isAddCartLoading } = useMutation(postAddCart, {
    onSuccess: res => {
      alert('장바구니에 추가되었습니다');
      window.location.reload();
    },
    onError: () => {
      console.log('에러');
    },
  });

  return (
    <ProductDiv width={props.width}>
      <ProductImgDiv>
        <ProductImg
          src={product.productMainImgSrc}
          alt="onandthefarmlogo"
        ></ProductImg>
        <ProductImgIcons>
          <AiOutlineHeart fontSize="x-large" onClick={addLike}/>
          <AiOutlineShoppingCart fontSize="x-large" onClick={e => addCartClick(product.productId)}/>
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