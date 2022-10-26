import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../components/common/PageNotFound';
import MainFooter from '../../components/main/MainFooter';
import MainNavbar from '../../components/main/MainNavbar';
import { StyledMainDiv } from './mainIndexLayout.style';
import MainMainPage from './mainMainPage';
import MainGroupBuy from './groupbuy/mainGroupBuy';
import MainCart from './carts/mainCart';
import MainMypage from './mypage/mainMypage';
import MainLikes from './likes/mainLikes';
import MainProductPage from './products/mainProductPage';
import UserLoginPage from './account/userLoginPage';
import MainKakaoLogin from './account/mainKakaoLogin';
import UserSignupPage from './account/userSignupPage';
import MainOrder from './order/mainOrder';
import SuccessPage from './successPage';
import SnsIndexLayout from '../sns/snsIndexLayout';
import SnsMainLayout from '../sns/main/Main';
import FeedDetail from '../sns/feedDetail/FeedDetail';

export default function MainIndexLayout() {
  return (
    <div>
      <MainNavbar />
      <StyledMainDiv>
        <Routes>
          <Route exact path="/" element={<MainMainPage />} />
          <Route exact path="/login" element={<UserLoginPage />} />
          <Route exact path="/signup" element={<UserSignupPage />} />
          <Route exact path="/products/*" element={<MainProductPage />} />
          <Route exact path="/groupbuy" element={<MainGroupBuy />} />
          <Route exact path="/like" element={<MainLikes />} />
          <Route exact path="/cart" element={<MainCart />} />
          <Route exact path="/order" element={<MainOrder />} />
          <Route exact path="/mypage/*" element={<MainMypage />} />
          <Route exact path="/sns/*" element={<SnsIndexLayout />} />
          <Route path="/sns/main" element={<SnsMainLayout />} />
          <Route path="/sns/detail/:id" element={<FeedDetail />} />
          <Route
            exact
            path="/login/success/kakao"
            element={<MainKakaoLogin />}
          />
          <Route exact path="/order/success" element={<SuccessPage />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </StyledMainDiv>
      <MainFooter />
    </div>
  );
}
