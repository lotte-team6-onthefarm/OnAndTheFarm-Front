import React, { useEffect } from 'react';
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

export default function MainLikes() {
  const [likeList, setLikeList] = useState([]);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});

  const { isLoading: isGetLikeList, refetch: getLikeListRefetch } = useQuery(
    'getLikeList',
    () => getLikeList({ sellerId: 1, pageNo: 1 }),
    {
      onSuccess: res => {
        setLikeList(res.data);
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  useEffect(() => {
    getLikeList()
  }, []);

  const changeCount = (id, quantity) => {
    selectedItems[id] = quantity
  }

  const checkedItemHandler = (id, isChecked, quantity) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }

    selectedItems[id] = quantity

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
            <Button text="장바구니 담기" color="#40AA54" width="130px"></Button>
            <Button
              text="선택삭제"
              color="#40AA54"
              width="130px"
              margin="auto auto auto 20px"
            ></Button>
          </div>
        </LikeListHeader>
        <hr />
        <LikeItems>
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
                // setIsAllChecked={setIsAllChecked}
                isAllChecked={isAllChecked}
              ></LikeItemComp>
            );
          })}
        </LikeItems>
      </LikeListDiv>
    </LikeContentDiv>
  );
}
