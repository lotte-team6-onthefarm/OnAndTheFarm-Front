import React from 'react';
import { AiOutlineHome, AiOutlineShop } from 'react-icons/ai';
import { BiSubdirectoryRight } from 'react-icons/bi';
import { TbLogout } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import onandthefarmlogo from '../../../assets/adminLogo.JPG';
import { sellerNavState } from '../../../recoil';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useState } from 'react';
import { Head, Image, ListWrapper, SubListWrapper } from './AdminNavbar.style';
import { useRecoilState } from 'recoil';
import { MdDesktopWindows, MdGridView, MdOutlineTune } from 'react-icons/md';
export default function AdminNavbar() {
  const menus = [
    {
      icons: <MdOutlineTune />,
      title: '전시 구좌 관리',
      // url: '/admin',
    },
    {
      icons: <AiOutlineShop />,
      title: '전시구좌 목록',
      url: '/admin',
    },
    {
      icons: <AiOutlineShop />,
      title: '전시구좌 등록',
      url: 'account/add',
    },
    { icons: <MdGridView />, title: '모듈 관리' },
    { icons: <AiOutlineHome />, title: '모듈 등록', url: 'module/add' },
    { icons: <AiOutlineHome />, title: '모듈 목록', url: 'module' },
    { icons: <AiOutlineHome />, title: '데이터 관리' },
    { icons: <AiOutlineHome />, title: '배너 등록', url: 'data/banner/add' },
    { icons: <AiOutlineHome />, title: '배지 등록', url: 'data/badge/add' },
    {
      icons: <MdDesktopWindows />,
      title: '메인페이지 등록',
      url: 'display/set',
    },
    {
      icons: <MdDesktopWindows />,
      title: '관리',
      url: 'display/set',
    },
  ];
  const [selectMenu, setSelectMenu] = useRecoilState(sellerNavState);
  const [accountSub, setAccountSub] = useState(false);
  const [moduleSub, setModuleSub] = useState(false);
  const [dataSub, setDataSub] = useState(false);
  const handleMenu = num => {
    setSelectMenu(num);
  };
  const accountSubHandler = () => {
    setAccountSub(!accountSub);
  };
  const moduleSubHandler = () => {
    setModuleSub(!moduleSub);
  };
  const dataSubHandler = () => {
    setDataSub(!dataSub);
  };
  const navigate = useNavigate();

  const logoutBtn = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    document.location.href = '/seller';
  };
  return (
    <Head>
      <Link to="/admin">
        <Image src={onandthefarmlogo}></Image>
      </Link>
      {menus.map((menu, idx) => {
        return (
          <div key={idx}>
            {idx === 0 && (
              <ListWrapper
                onClick={() => {
                  accountSubHandler();
                }}
                productSub={accountSub}
              >
                <div className="icons">{menu.icons}</div>
                <div className="right">
                  <div>{menu.title}</div>
                  <div className="icons" onClick={accountSubHandler}>
                    <RiArrowDownSLine />
                  </div>
                </div>
              </ListWrapper>
            )}
            {(idx === 1 || idx === 2) && (
              <SubListWrapper productSub={accountSub}>
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
            )}
            {idx === 3 && (
              <ListWrapper
                onClick={() => {
                  moduleSubHandler();
                }}
                productSub={moduleSub}
              >
                <div className="icons">{menu.icons}</div>
                <div className="right">
                  <div>{menu.title}</div>
                  <div className="icons" onClick={moduleSubHandler}>
                    <RiArrowDownSLine />
                  </div>
                </div>
              </ListWrapper>
            )}
            {(idx === 4 || idx === 5) && (
              <SubListWrapper productSub={moduleSub}>
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
            )}
            {idx === 6 && (
              <ListWrapper
                onClick={() => {
                  dataSubHandler();
                }}
                productSub={dataSub}
              >
                <div className="icons">{menu.icons}</div>
                <div className="right">
                  <div>{menu.title}</div>
                  <div className="icons" onClick={dataSubHandler}>
                    <RiArrowDownSLine />
                  </div>
                </div>
              </ListWrapper>
            )}
            {(idx === 7 || idx === 8) && (
              <SubListWrapper productSub={dataSub}>
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
            )}

            {idx === 9 && (
              <Link to={menu.url} key={idx}>
                <ListWrapper
                  onClick={() => {
                    handleMenu(idx);
                  }}
                  check={idx === selectMenu ? '1' : '0'}
                  color={idx === selectMenu ? '#F2F2F2' : 'white'}
                >
                  <div className="icons">{menu.icons}</div>
                  <div className="right">
                    <div>{menu.title}</div>
                  </div>
                </ListWrapper>
              </Link>
            )}
          </div>
        );
      })}
      <ListWrapper onClick={logoutBtn} color="white" productSub={accountSub}>
        <div className="icons">
          <TbLogout />
        </div>
        <div className="right">
          <div>로그아웃</div>
        </div>
      </ListWrapper>
    </Head>
  );
}
