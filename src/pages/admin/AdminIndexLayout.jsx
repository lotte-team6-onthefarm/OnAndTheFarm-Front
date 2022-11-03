import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminNavbar from '../../components/admin/navbar/AdminNavbar';
import { MainWrapper } from '../../components/seller/common/Box.style';
import AccountList from './account/accountList/AccountList';
import AddAccount from './account/addAccount/AddAccount';
import AddBadge from './data/badge/AddBadge';
import AddBanner from './data/banner/AddBanner';
import AddModule from './module/addModule/AddModule';
import ModuleList from './module/moduleList/ModuleList';
import PageLayout from './PageLayout';

export default function AdminIndexLayout() {
  return (
    <MainWrapper>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<AccountList />} />
        <Route path="/account/add" element={<AddAccount />} />
        <Route path="/module" element={<ModuleList />} />
        <Route path="/module/add" element={<AddModule />} />
        <Route path="/data/badge/add" element={<AddBadge />} />
        <Route path="/data/banner/add" element={<AddBanner />} />
        <Route path="/pageLayout/add" element={<PageLayout />} />
      </Routes>
    </MainWrapper>
  );
}
