import React from 'react';
import { WaybillWrapper } from '../Delivery.style';

export default function DeliveryState(props) {
  return (
    <>
      <td>
        {props.data.orderState === '0' ? (
          <WaybillWrapper>
            <div>
              <select>
                {props.shippingCompany.map((company, idx) => {
                  return (
                    <option value={company} key={idx}>
                      {company}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <input type="text" placeholder="송장번호 입력" />
            </div>
            <button>송장번호 저장</button>
          </WaybillWrapper>
        ) : (
          <div>{props.data.waybill}</div>
        )}
      </td>
      <td>
        {props.data.orderState === '0' && <button>배송 처리</button>}
        {props.data.orderState === '1' && <button>완료 처리</button>}
        {props.data.orderState === '2' && <div>배송완료</div>}
      </td>
    </>
  );
}
