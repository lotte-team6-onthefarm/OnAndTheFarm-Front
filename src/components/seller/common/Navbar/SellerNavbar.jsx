import React from 'react';
import {
  Head,
  Image,
  ListWrapper,
  PlusIcon,
  SubListWrapper,
} from './SellerNavbar.style';
import {
  AiOutlineHome,
  AiOutlineShop,
  AiOutlinePercentage,
  AiOutlinePlus,
} from 'react-icons/ai';
import { BiSubdirectoryRight } from 'react-icons/bi';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsGraphUp } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import onandthefarmlogo from '../../../../assets/logo.png';
import { useRecoilState } from 'recoil';
import { sellerNavState } from '../../../../recoil';
import { RiArrowDownSLine, RiBillLine } from 'react-icons/ri';
import { useState } from 'react';

export default function SellerNavbar() {
  const menus = [
    { icons: <AiOutlineHome />, title: '메인 페이지', url: '/seller' },
    { icons: <AiOutlineShop />, title: '상품 관리', url: '/seller/products' },
    { icons: <AiOutlineShop />, title: '상품 리스트', url: '/seller/products' },
    {
      icons: <AiOutlineShop />,
      title: '리뷰 관리',
      url: '/seller/products/reviews',
    },
    {
      icons: <AiOutlineShop />,
      title: 'QnA 관리',
      url: '/seller/products/qnas',
    },
    { icons: <TbTruckDelivery />, title: '주문 관리', url: '/seller/delivery' },
    { icons: <RiBillLine />, title: '취소/반품 관리', url: '/seller/order' },
    { icons: <BsGraphUp />, title: '통계 수치', url: '/seller/statistics' },
    {
      icons: <AiOutlinePercentage />,
      title: '프로모션',
      url: '/seller/promotion',
    },
  ];
  const [selectMenu, setSelectMenu] = useRecoilState(sellerNavState);
  const [productSub, setProductSub] = useState(false);
  const handleMenu = num => {
    setSelectMenu(num);
  };
  const productSubHandler = () => {
    setProductSub(!productSub);
  };
  const navigate = useNavigate();

  //function
  const productUrl = () => {
    navigate('/seller/products/add');
  };
  return (
    <Head>
      <Link to="/seller">
        <Image src={onandthefarmlogo}></Image>
      </Link>
      {menus.map((menu, idx) => {
        return (
          <div key={idx}>
            {idx === 2 || idx === 3 || idx === 4 ? (
              <SubListWrapper productSub={productSub}>
                <Link to={menu.url} key={idx}>
                  <ListWrapper
                    onClick={() => {
                      handleMenu(idx);
                    }}
                    check={idx === selectMenu ? '1' : '0'}
                    color={idx === selectMenu ? '#F2F2F2' : 'white'}
                  >
                    <div className="icons">
                      <BiSubdirectoryRight />
                    </div>
                    <div className="right">
                      <div>{menu.title}</div>
                    </div>
                  </ListWrapper>
                </Link>
              </SubListWrapper>
            ) : (
              <>
                {idx === 1 ? (
                  <ListWrapper
                    onClick={() => {
                      productSubHandler();
                    }}
                    productSub={productSub}
                  >
                    <div className="icons">{menu.icons}</div>
                    <div className="right">
                      <div>{menu.title}</div>
                      <div className="icons" onClick={productSubHandler}>
                        <RiArrowDownSLine />
                      </div>
                    </div>
                  </ListWrapper>
                ) : (
                  <Link to={menu.url} key={idx}>
                    <ListWrapper
                      onClick={() => {
                        handleMenu(idx);
                      }}
                      check={idx === selectMenu ? '1' : '0'}
                      color={idx === selectMenu ? '#F2F2F2' : 'white'}
                      productSub={productSub}
                    >
                      <div className="icons">{menu.icons}</div>
                      <div className="right">
                        <div>{menu.title}</div>
                      </div>
                    </ListWrapper>
                  </Link>
                )}
              </>
            )}
          </div>
        );
      })}
      {/* 상품등록 이동 버튼 */}
      <PlusIcon
        onClick={() => {
          handleMenu(1);
        }}
      >
        <AiOutlinePlus onClick={productUrl} />
      </PlusIcon>
    </Head>
  );
}
