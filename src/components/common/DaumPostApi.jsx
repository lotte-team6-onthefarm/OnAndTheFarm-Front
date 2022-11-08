import React from 'react';
import DaumPostcode from 'react-daum-postcode';
export default function DaumPostApi(props) {
  const handleComplete = data => {
    let fullAddress = data.address;
    let zoneCode = data.zonecode;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    props.setPostCode(zoneCode);
    props.setAddress(fullAddress);
    props.setModal(false);
  };

  return <DaumPostcode onComplete={handleComplete} />;
}
