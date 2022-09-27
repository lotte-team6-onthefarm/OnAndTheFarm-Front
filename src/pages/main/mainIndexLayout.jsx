import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../components/common/PageNotFound';
import MainFooter from '../../components/main/MainFooter';
import MainNavbar from '../../components/main/MainNavbar';
import MainSignupPage from './account/mainSignupPage';
import { StyledMainDiv } from './mainIndexLayout.style';
import MainLoginPage from './account/mainLoginPage';
import MainMainPage from './mainMainPage';
import MainProductList from './products/mainProductList';
import MainPost from './posts/mainPost';
import MainGroupBuy from './groupbuy/mainGroupBuy';
import MainLike from './likes/mainLike';
import MainCart from './carts/mainCart';
import MainMypage from './mypage/mainMypage';

export default function MainIndexLayout() {
  return (
    <div>
      <MainNavbar />
      <StyledMainDiv>
        <Routes>
          <Route exact path="/" element={<MainMainPage />} />
          <Route exact path="/login" element={<MainLoginPage />} />
          <Route exact path="/signup" element={<MainSignupPage />} />
          <Route exact path="/products" element={<MainProductList/>} />
          <Route exact path="/posts" element={<MainPost />} />
          <Route exact path="/groupbuy" element={<MainGroupBuy />} />
          <Route exact path="/like" element={<MainLike />} />
          <Route exact path="/cart" element={<MainCart />} />
          <Route exact path="/mypage" element={<MainMypage />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </StyledMainDiv>
      <MainFooter />
    </div>
  );
}
