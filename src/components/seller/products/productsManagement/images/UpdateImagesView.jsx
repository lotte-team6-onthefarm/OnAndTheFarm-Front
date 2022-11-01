import React from 'react';

export default function UpdateImagesView(props) {
  return (
    <div style={{ display: 'flex' }}>
      {props.images.map((item, idx) => (
        <div key={idx} style={{ position: 'relative' }}>
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
