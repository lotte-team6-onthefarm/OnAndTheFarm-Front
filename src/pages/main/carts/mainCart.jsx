import React, { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useState } from 'react';
import CartItemComp from '../../../components/main/cart/CartItem';
import { Button } from '../../../components/common/Button';
import {
  CartContentDiv,
  CartListDiv,
  CartPriceDiv,
  CartListHeader,
  CartItems,
  CartPriceHeader,
  CartPriceRow,
  CartPriceTotal,
} from './mainCart.style';
import { deleteCartList, getCartList } from '../../../apis/user/cart';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../../components/common/Pagination';

export default function MainCart() {
  // const [cartList, setCartList] = useState([]);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [changeChecked, setChangeChecked] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const {
    isLoading: isGetCartList,
    refetch: getCartistRefetch,
    data: cartList,
  } = useQuery(
    ['getCartList', nowPage],
    () =>
    getCartList({
        page: nowPage,
      }),
    {
      refetchOnWindowFocus: true,
      keepPreviousData: true,
      onSuccess: res => {
        setNowPage(res.currentPageNum);
        setTotalPage(res.totalPageNum);
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  const deleteWishClick = () => {
    let cartId = [];
    if (checkedItems.size === 0) {
      alert('삭제할 아이템을 선택해주세요');
      return;
    }
    for (const item of checkedItems) {
      cartId.push(cartList[item].cartId);
    }
    deleteCart({ cartList: cartId });
  };

  const { mutate: deleteCart, isLoading: isDeleteCartLoading } = useMutation(
    deleteCartList,
    {
      onSuccess: res => {},
      onError: () => {
        console.log('에러');
      },
    },
  );

  const changeCount = (id, quantity) => {
    selectedItems[id] = quantity;
    setSelectedItems(selectedItems);
    setChangeChecked(!changeChecked);
  };

  const checkedItemHandler = (id, isChecked, quantity) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
      // setCheckedItems(new Set([...checkedItems, id]));
    } else if (!isChecked && checkedItems.has(id)) {
      // let temp2 = new Set([...checkedItems].filter(x => x !== id))
      // setCheckedItems(new Set([...temp2]));
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }

    selectedItems[id] = quantity;
    setSelectedItems(selectedItems);
    if (cartList.length === checkedItems.size) {
      setAllChecked(true);
      setIsAllChecked(true);
    } else {
      setAllChecked(false);
      setIsAllChecked(false);
    }
    setChangeChecked(!changeChecked);
  };

  const allCheckedHandler = isChecked => {
    if (isChecked) {
      setCheckedItems(new Set(cartList.map((like, idx) => String(idx))));
      setIsAllChecked(true);
    } else {
      checkedItems.clear();
      setCheckedItems(new Set());
      setIsAllChecked(false);
    }
  };

  const checkAllHandler = ({ target }) => {
    setAllChecked(!allChecked);
    setChangeChecked(!changeChecked);
    allCheckedHandler(target.checked);
  };
  // hook
  const navigate = useNavigate();

  const orderCart = () => {
    let tempCartItems = [];
    for (const item of checkedItems) {
      cartList[item].cartQty = selectedItems[item];
      tempCartItems.push(cartList[item]);
    }
    console.log(tempCartItems);
    deleteWishClick();
    navigate(`/order`, { state: tempCartItems });
  };

  useEffect(() => {
    let tempPrice = 0;
    for (const item of checkedItems) {
      tempPrice = tempPrice + cartList[item].productPrice * selectedItems[item];
    }
    setTotalPrice(tempPrice);
  }, [changeChecked]);

  return (
    <CartContentDiv>
      <CartListDiv>
        <p className="subject">장바구니</p>
        <CartListHeader>
          <div style={{ display: 'flex' }}>
            <input
              type="checkbox"
              checked={allChecked}
              onChange={e => checkAllHandler(e)}
              style={{ margin: 'auto' }}
            />
            <p style={{ margin: 'auto 20px' }}>전체선택</p>
          </div>
          <div>
            <Button
              text="선택삭제"
              color="#40AA54"
              width="130px"
              margin="auto auto auto 20px"
              onClick={deleteWishClick}
            ></Button>
          </div>
        </CartListHeader>
        <hr />
        <CartItems>
          {!isGetCartList && (
            <>
              {cartList.cartResponseList.map((cart, index) => {
                return (
                  <CartItemComp
                    key={index}
                    id={index}
                    url={cart.productMainImgSrc}
                    name={cart.productName}
                    number={cart.cartQty}
                    price={cart.productPrice}
                    checkedItemHandler={checkedItemHandler}
                    checkedItems={checkedItems}
                    likeListSize={cartList.length}
                    changeCount={changeCount}
                    isAllChecked={isAllChecked}
                  ></CartItemComp>
                );
              })}
            </>
          )}
        </CartItems>
        {totalPage !== 0 && (
        <Pagination
          nowPage={nowPage + 1}
          totalPage={totalPage}
          setPage={setNowPage}
        ></Pagination>
      )}
      </CartListDiv>
      <CartPriceDiv>
        <CartPriceHeader>결제예정금액</CartPriceHeader>
        <CartPriceRow>
          <p>상품금액</p>
          <p>{totalPrice}원</p>
        </CartPriceRow>
        {/* <CartPriceRow>
          <p>할인금액</p>
          <p>000원</p>
        </CartPriceRow>
        <CartPriceRow>
          <p>배송비</p>
          <p>000원</p>
        </CartPriceRow> */}
        <CartPriceTotal>
          <span>{totalPrice}</span>원
        </CartPriceTotal>
        <Button
          text="주문하기"
          color="#40AA54"
          width="130px"
          margin="0 0 0 150px"
          onClick={orderCart}
        ></Button>
      </CartPriceDiv>
    </CartContentDiv>
  );
}
