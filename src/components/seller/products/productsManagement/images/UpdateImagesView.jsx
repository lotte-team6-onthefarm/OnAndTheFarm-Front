import React from 'react';

export default function UpdateImagesView(props) {
  return (
    <div style={{ display: 'flex' }}>
      {props.images.map((item, idx) => (
        <div key={idx}>
          <button onClick={() => props.deleteImg(item.productImgId)}>
            test
          </button>
          <img
            src={item.productImgSrc}
            alt=""
            className="productImagePreview"
          />
        </div>
      ))}
    </div>
  );
}
