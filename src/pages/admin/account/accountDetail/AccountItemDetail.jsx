import React from 'react';
import { AccountDetailTextWrapper } from './AccountDetail.styled';

export default function AccountItemDetail(props) {
  const exhibitionItemsProductId =
    props.items.exhibitionAccountItemDetailResponseList.map(item => {
      return item.exhibitionItemNumber;
    });
  const exhibitionItemsPriorityId =
    props.items.exhibitionAccountItemDetailResponseList.map(item => {
      return item.exhibitionItemPriority;
    });
  return (
    <>
      {exhibitionItemsProductId.map((data, idx) => (
        <AccountDetailTextWrapper key={idx}>
          <div className="accountDetailTitle">데이터 ID</div>
          <div className="accountItemContent">
            {exhibitionItemsProductId[idx]}
          </div>
          <div className="accountDetailTitle" style={{ marginLeft: '30px' }}>
            데이터 순서
          </div>
          <div className="accountItemContent">
            {exhibitionItemsPriorityId[idx]}
          </div>
        </AccountDetailTextWrapper>
      ))}
    </>
  );
}

// <div className="accountDetailTitle">데이터 순서 및 ID</div>
// <div className="accountDetailContent">
//   <table width="40%" style={{ margin: '10px 0' }}>
//     <thead>
//       <tr>
//         <th width="30%">데이터 전시 순서</th>
//         <th>데이터 ID</th>
//       </tr>
//     </thead>
//     <tbody>
//       {exhibitionItemsProductId.map((data, idx) => (
//         <tr key={idx} style={{ textAlign: 'center' }}>
//           <td>{exhibitionItemsPriorityId[idx]}</td>
//           <td>{exhibitionItemsProductId[idx]}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>
