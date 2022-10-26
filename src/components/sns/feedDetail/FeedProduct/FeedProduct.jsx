import React from 'react';
import { Link } from 'react-router-dom';
import { FeedProductWrapper } from './FeedProduct.styled';

export default function FeedProduct(props) {
  return (
    <FeedProductWrapper>
      <ul>
        {props.feedImageProductList.map((img, idx) => {
          return (
            <li key={idx}>
              <div>
                <Link to="">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img src={img.productMainImgSrc} alt={img.productId}></img>
                  </div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <p>{props.feedContent}</p>
    </FeedProductWrapper>
  );
}
