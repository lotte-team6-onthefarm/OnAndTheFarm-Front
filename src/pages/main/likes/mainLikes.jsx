import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { useState } from 'react';
import { Button } from '../../../components/common/Button';
import {
  LikeContentDiv,
  LikeListDiv,
  LikeListHeader,
  LikeItems,
} from './mainLikes.style';
import { getLikeList } from '../../../apis/user/users';
import LikeItemComp from '../../../components/main/like/LikeItem';
import { postAddCart } from '../../../apis/user/cart';
import { deleteWishList } from '../../../apis/user/product';

export default function MainLikes() {
  // const [likeList, setLikeList] = useState([]);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});

  const { isLoading: isGetLikeList, data: likeList } = useQuery(
    'getLikeList',
    () => getLikeList(),
    {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      onSuccess: res => {},
      onError: () => {
        console.log('에러');
      },
    },
  );

  const changeCount = (id, quantity) => {
    selectedItems[id] = quantity;
  };

  const checkedItemHandler = (id, isChecked, quantity) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }

    selectedItems[id] = quantity;

    if (likeList.length === checkedItems.size) {
      setAllChecked(true);
      setIsAllChecked(true);
    } else {
      setAllChecked(false);
      setIsAllChecked(false);
    }
  };

  const allCheckedHandler = isChecked => {
    if (isChecked) {
      setCheckedItems(new Set(likeList.map((like, idx) => String(idx))));
      setIsAllChecked(true);
    } else {
      checkedItems.clear();
      setCheckedItems(new Set());
      setIsAllChecked(false);
    }
  };

  const checkAllHandler = ({ target }) => {
    setAllChecked(!allChecked);
    allCheckedHandler(target.checked);
  };
  const addCartClick = () => {
    let cartList = [];
    if (checkedItems.size === 0) {
      alert('장바구니에 추가할 아이템을 선택해주세요');
      return;
    }
    for (const item of checkedItems) {
      cartList.push({
        productId: likeList[item].productId,
        cartQty: selectedItems[item],
      });
    }
    addCart({ cartList: cartList });
  };
  const deleteWishClick = () => {
    let wishId = [];
    if (checkedItems.size === 0) {
      alert('삭제할 아이템을 선택해주세요');
      return;
    }
    for (const item of checkedItems) {
      wishId.push(likeList[item].wistId);
    }
    deleteWish({ wishId: wishId });
  };

  const { mutate: addCart, isLoading: isAddCartLoading } = useMutation(
    postAddCart,
    {
      onSuccess: res => {
        alert('장바구니에 추가되었습니다');
        window.location.reload();
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  const { mutate: deleteWish, isLoading: isDeleteWishLoading } = useMutation(
    deleteWishList,
    {
      onSuccess: res => {},
      onError: () => {
        console.log('에러');
      },
    },
  );
  return (
    <LikeContentDiv>
      <LikeListDiv>
        <p className="subject">찜목록</p>
        <LikeListHeader>
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
              text="장바구니 담기"
              color="#40AA54"
              width="130px"
              onClick={addCartClick}
            ></Button>
            <Button
              text="선택삭제"
              color="#40AA54"
              width="130px"
              margin="auto auto auto 20px"
              onClick={deleteWishClick}
            ></Button>
          </div>
        </LikeListHeader>
        <hr />
        <LikeItems>
          {!isGetLikeList && (
            <>
              {likeList.map((like, index) => {
                return (
                  <LikeItemComp
                    key={index}
                    id={index}
                    url={like.productMainImgSrc}
                    name={like.productName}
                    number={1}
                    price={like.productPrice}
                    checkedItemHandler={checkedItemHandler}
                    checkedItems={checkedItems}
                    likeListSize={likeList.length}
                    changeCount={changeCount}
                    isAllChecked={isAllChecked}
                  ></LikeItemComp>
                );
              })}
            </>
          )}
        </LikeItems>
      </LikeListDiv>
    </LikeContentDiv>
  );
}
