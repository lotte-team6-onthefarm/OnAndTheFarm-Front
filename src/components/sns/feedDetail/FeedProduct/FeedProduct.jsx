import React from 'react';
import { Link } from 'react-router-dom';
import { FeedProductWrapper } from './FeedProduct.styled';

export default function FeedProduct(props) {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTbSCuQiZt6sLVL-TZS822ZuGJoHllrjp9g&usqp=CAU',
    'http://gdimg.gmarket.co.kr/819482350/still/600?ver=1520497519',
    'https://www.busan.com/nas/data/content/image/2018/07/04/20180704000106_0.jpg',
    // 'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164326414719304022.jpg?gif=1&w=144',
    // 'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159425724429419466.jpg?gif=1&w=144',
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
      <p>{props.feedContent}</p>
    </FeedProductWrapper>
  );
}
