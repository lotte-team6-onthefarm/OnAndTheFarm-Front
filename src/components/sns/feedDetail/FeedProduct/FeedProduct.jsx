import React from 'react';
import { Link } from 'react-router-dom';
import { FeedProductWrapper } from './FeedProduct.styled';

export default function FeedProduct() {
  const images = [
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163644707906688086.jpg?gif=1&w=144',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/1555291407_102180_1.jpg?gif=1&w=144',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163287535795947956.jpg?gif=1&w=144',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164326414719304022.jpg?gif=1&w=144',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159425724429419466.jpg?gif=1&w=144',
  ];
  return (
    <FeedProductWrapper>
      <ul>
        {images.map((img, idx) => {
          return (
            <li key={idx}>
              <div>
                <Link to="">
                  <div>
                    <img src={img} alt=""></img>
                  </div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </FeedProductWrapper>
  );
}
