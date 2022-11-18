import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GreenButton, WhiteButtonNoHover } from '../../common/Button.style';
import SelectBox from '../../common/SelectBox';
import { DELIVERY_COMPANY } from './DeliveryCompanyList';

export default function WaybillList(props) {
  const [companyData, setCompanyData] = useState('');
  useEffect(() => {
    props.setDeliveryCompany(
      props.deliveryCompany.map((com, idx) => {
        return idx === props.idx ? companyData : com;
      }),
    );
  }, [companyData]);
  return (
    <>
      <td>
        {props.orderProductDeliveryWaybillNumber === null ? (
          <>
            <SelectBox
              options={DELIVERY_COMPANY}
              setSelectData={setCompanyData}
              value={props.deliveryCompany[props.idx]}
              onChange={() => test(props.idx)}
            ></SelectBox>
            <input
              value={props.waybillNumber[props.idx]}
              type="text"
              className="deliveryNumberInput"
              placeholder="운송장 번호를 입력해주세요"
              onChange={e =>
                props.setWaybillNumber(
                  props.waybillNumber.map((num, idx) => {
                    return idx === props.idx ? e.target.value : num;
                  }),
                )
              }
            />
          </>
        ) : (
          <>
            <div>{props.orderProductDeliveryCompany}</div>
            <div>{props.orderProductDeliveryWaybillNumber}</div>
          </>
        )}
      </td>
    </>
  );
}
