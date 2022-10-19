import React from 'react';

export default function ImagesView(props) {
  return (
    <div>
      {props.images.map((url, idx) => (
        <img src={url} alt="" key={idx} className="productImagePreview" />
      ))}
    </div>
  );
}
