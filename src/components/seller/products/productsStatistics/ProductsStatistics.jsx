import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toLocaleString } from '../../../../utils/commonFunction';
import { WhiteWrapper } from '../../common/Box.style';
import SubTitle from '../../common/SubTitle';
import { SellerTitle } from '../../common/Title.style';
import { BsPencil } from 'react-icons/bs';
import { ProductStatisticsTable, StatusTd } from './ProductsStatistics.style';
import { AiTwotoneHeart, AiTwotoneStar } from 'react-icons/ai';
import { IconBox, IconWrapper } from '../../common/Icon.style';

export default function ProductsStatistics() {
  const datas = [
    {
      title: '달콤 샤인 머스캣',
      status: 1,
      price: '14900',
      star: '5.0',
      like: 241,
      view: 1252,
      img: '../../../../assets/products/머스캣.png',
    },
    {
      title: '경북 청도 천도복숭아 2kg/1box',
      status: 0,
      price: '48000',
      star: '4.0',
      like: 251,
      view: 4252,
      img: '../../../../assets/products/복숭아.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      status: 1,
      price: '38500',
      star: '2.5',
      like: 633,
      view: 2141,
      img: '../../../../assets/products/거봉.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      status: 1,
      price: '38500',
      star: '2.5',
      like: 633,
      view: 2141,
      img: '../../../../assets/products/거봉.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      status: 1,
      price: '38500',
      star: '2.5',
      like: 633,
      view: 2141,
      img: '../../../../assets/products/거봉.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      status: 1,
      price: '38500',
      star: '2.5',
      like: 633,
      view: 2141,
      img: '../../../../assets/products/거봉.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      status: 2,
      price: '38500',
      star: '2.5',
      like: 633,
      view: 2141,
      img: '../../../../assets/products/거봉.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      status: 1,
      price: '38500',
      star: '2.5',
      like: 633,
      view: 2141,
      img: '../../../../assets/products/거봉.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      status: 1,
      price: '38500',
      star: '2.5',
      like: 633,
      view: 2141,
      img: '../../../../assets/products/거봉.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      status: 1,
      price: '38500',
      star: '2.5',
      like: 633,
      view: 2141,
      img: '../../../../assets/products/거봉.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      status: 1,
      price: '38500',
      star: '2.5',
      like: 633,
      view: 2141,
      img: '../../../../assets/products/거봉.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      status: 1,
      price: '38500',
      star: '2.5',
      like: 633,
      view: 2141,
      img: '../../../../assets/products/거봉.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      status: 1,
      price: '38500',
      star: '2.5',
      like: 633,
      view: 2141,
      img: '../../../../assets/products/거봉.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      status: 1,
      price: '38500',
      star: '2.5',
      like: 633,
      view: 2141,
      img: '../../../../assets/products/거봉.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      status: 1,
      price: '38500',
      star: '2.5',
      like: 633,
      view: 2141,
      img: '../../../../assets/products/거봉.png',
    },
  ];
  const title = `전체 상품 (총 ${datas.length}개)`;

  // hook
  const navigate = useNavigate();

  //function
  const updateUrl = id => {
    navigate(`/seller/products/update/${id}`);
  };
  return (
    <>
      <SellerTitle>상품 관리</SellerTitle>
      <WhiteWrapper width="100%" marginBottom="10px">
        <SubTitle color="#FFBC99" title={title} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <ProductStatisticsTable>
            <thead>
              <tr style={{ fontSize: '13px' }}>
                <th width="5%">NO.</th>
                <th width="30%">상품명</th>
                <th width="10%">상태</th>
                <th width="12.5%">가격</th>
                <th width="10%">별점</th>
                <th width="10%">좋아요수</th>
                <th width="12.5%">조회수</th>
              </tr>
            </thead>
            {datas.map((data, idx) => {
              return (
                <tbody key={idx}>
                  <tr>
                    <td>{idx + 1}</td>
                    <td className="title">
                      <img
                        src={require('../../../../assets/products/복숭아.png')}
                        alt=""
                      />
                      <div>{data.title}</div>
                    </td>
                    <td>
                      <StatusTd status={data.status}>
                        {data.status === 1 ? '판매중' : '판매중지'}
                      </StatusTd>
                      <div className="updateBtn">
                        <div onClick={() => updateUrl(idx)}>
                          <BsPencil />
                        </div>
                      </div>
                    </td>
                    <td>{toLocaleString(data.price)}원</td>
                    <td className="grayBack">
                      <IconWrapper>
                        <IconBox>
                          <AiTwotoneStar style={{ color: '#eff21b' }} />
                        </IconBox>
                        {data.star}
                      </IconWrapper>
                    </td>
                    <td>
                      <IconWrapper>
                        <IconBox>
                          <AiTwotoneHeart style={{ color: '#f73f2a' }} />
                        </IconBox>
                        {data.like}
                      </IconWrapper>
                    </td>
                    <td>{data.view}회</td>
                  </tr>
                </tbody>
              );
            })}
          </ProductStatisticsTable>
        </div>
      </WhiteWrapper>
    </>
  );
}
