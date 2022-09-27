import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../components/common/PageNotFound';
import MainFooter from '../../components/main/MainFooter';
import MainNavbar from '../../components/main/MainNavbar';
import MainSignupPage from './account/mainSignupPage';
import { StyledMainDiv } from './mainIndexLayout.style';
import MainLoginPage from './mainLoginPage';
import MainMainPage from './mainMainPage copy';

export default function MainIndexLayout() {
  return (
    <div>
      <MainNavbar />
      <StyledMainDiv>
        <Routes>
          <Route exact path="/" element={<MainMainPage />} />
          <Route exact path="/login" element={<MainLoginPage />} />
          <Route exact path="/signup" element={<MainSignupPage />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </StyledMainDiv>
      <MainFooter />
    </div>
  );
}
