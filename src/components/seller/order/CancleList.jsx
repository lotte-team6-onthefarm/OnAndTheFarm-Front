import React from 'react';
import { GreenPurpleStatusButton } from '../common/ColorStatusButton';
import { UserImgWrapper } from '../common/sellerCommon.style';

export default function CancleList(props) {
  return (
    <tbody>
      <tr>
        <td className="title">
          <img src={props.data.orderProductMainImg} alt="" />
          <div>{props.data.title}</div>
          {props.data.orderProductName} / ({props.data.orderProductQty}EA)
        </td>
        <td className="content">
          <GreenPurpleStatusButton fontSize="15px" text="취소요청" status={1} />
        </td>
        <td className="content">{props.data.ordersDate}</td>
        <td>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <UserImgWrapper
              src={props.data.userProfile}
              alt=""
              width="30px"
            ></UserImgWrapper>
            <div style={{ paddingLeft: '10px' }}>{props.data.userName}</div>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
