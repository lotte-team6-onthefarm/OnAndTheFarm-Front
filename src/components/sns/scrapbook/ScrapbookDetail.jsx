import React from 'react';
import { FeedScrapWrapper, ScrapImgWrapper } from './ScrapbookDetail.styled';

export default function ScrapbookDetail() {
  const turn = [
    'https://image.ohou.se/i/video-service-prd-s3-bucket-thumbnail/634527c3e82a3072d14b2044/634527c3e82a3072d14b2044.0000001.jpg?gif=1&w=480&q=80&webp=1',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166022826437388126.jpg?gif=1&w=640&h=640&c=c&webp=1',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166236848703669814.jpeg?gif=1&w=720&webp=1',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162556105877921870.jpg?gif=1&w=640&h=640&c=c&webp=1',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164056438004424285.jpg?gif=1&w=640&h=640&c=c&webp=1',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166515545614925185.jpeg?gif=1&w=720&webp=1',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166546190679342672.jpg?gif=1&w=640&h=640&c=c&webp=1',
    'https://image.ohou.se/i/video-service-prd-s3-bucket-thumbnail/634527c3e82a3072d14b2044/634527c3e82a3072d14b2044.0000001.jpg?gif=1&w=480&q=80&webp=1',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166022826437388126.jpg?gif=1&w=640&h=640&c=c&webp=1',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166236848703669814.jpeg?gif=1&w=720&webp=1',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162556105877921870.jpg?gif=1&w=640&h=640&c=c&webp=1',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166236848703669814.jpeg?gif=1&w=720&webp=1',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162556105877921870.jpg?gif=1&w=640&h=640&c=c&webp=1',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164056438004424285.jpg?gif=1&w=640&h=640&c=c&webp=1',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166515545614925185.jpeg?gif=1&w=720&webp=1',
    'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166546190679342672.jpg?gif=1&w=640&h=640&c=c&webp=1',
  ];
  const id = [
    '벽장꾸미기',
    'thsd_stjd',
    'thsd_stjd',
    'ye_dwd24',
    '오늘의 집',
    '온앤더 팜',
    'yorisa._.',
    '벽장꾸미기',
    'thsd_stjd',
    'thsd_stjd',
    'ye_dwd24',
    '오늘의 집',
    '온앤더 팜',
    'yorisa._.',
    '벽장꾸미기',
    'thsd_stjd',
  ];
  return (
    <FeedScrapWrapper>
      {turn.map((tu, idx) => {
        return (
          <ScrapImgWrapper>
            <img src={tu} alt="" />
            <div>@ {id[idx]}</div>
          </ScrapImgWrapper>
        );
      })}
    </FeedScrapWrapper>
  );
}
