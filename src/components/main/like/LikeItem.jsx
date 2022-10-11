import React, { useEffect } from 'react';
import { useState } from 'react';
import Counter from '../../common/Counter';
import {
  LikeItem,
  LikeItemImg,
  LikeItemContent,
  LikeItemDetail,
  LikeItemNumber,
  LikeItemPrice,
} from './LikeItem.style';

export default function LikeItemComp(props) {
  const [bChecked, setChecked] = useState(false);
  const [quantity, setQuantity] = useState(props.number);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    props.checkedItemHandler(target.id, target.checked, quantity);
  };

  const allCheckHandler = () => {
    if (props.likeListSize === props.checkedItems.size) {
      setChecked(props.isAllChecked);
    } else if(props.checkedItems.size === 0){
      setChecked(props.isAllChecked);
    }
  };

  useEffect(() => allCheckHandler(), [props.checkedItems.size]);
  useEffect(() => props.changeCount(props.id, quantity), [quantity]);

  return (
    <LikeItem>
      <input
        id={props.id}
        type="checkbox"
        checked={bChecked}
        onChange={e => checkHandler(e)}
      />
      <LikeItemImg width="70px" height="70px" src={props.url} alt="" />
      <LikeItemContent>
        <LikeItemDetail>
          <p>{props.name}</p>
        </LikeItemDetail>
        <LikeItemNumber>
          <Counter value={quantity} setQuantity={setQuantity} />
        </LikeItemNumber>
        <LikeItemPrice>
          <p>{props.price}</p>
        </LikeItemPrice>
      </LikeItemContent>
    </LikeItem>
  );
}
