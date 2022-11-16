import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddMainDisplay from '../../components/admin/addMainDisplay/AddMainDisplay';
import AdminNavbar from '../../components/admin/navbar/AdminNavbar';
import SetMainDisplay from '../../components/admin/setMainDisplay/SetMainDisplay';
import {
  MainWrapper,
  PageCol,
  PageRow,
  RightWrapper,
} from '../../components/seller/common/Box.style';
import AccountDetail from './account/accountDetail/AccountDetail';
import AccountList from './account/accountList/AccountList';
import AddAccount from './account/addAccount/AddAccount';
import AddBadge from './data/badge/AddBadge';
import AddBanner from './data/banner/AddBanner';
import DlqList from './DlqList';
import AddModule from './module/addModule/AddModule';
import ModuleList from './module/moduleList/ModuleList';

export default function AdminIndexLayout() {
  return (
    <MainWrapper>
      <AdminNavbar />
      <RightWrapper>
        <PageRow>
          <PageCol width="100%">
            <Routes>
              <Route path="/" element={<AccountList />} />
              <Route path="/account/add" element={<AddAccount />} />
              <Route path="/account/detail/:id" element={<AccountDetail />} />
              <Route path="/module" element={<ModuleList />} />
              <Route path="/module/add" element={<AddModule />} />
              <Route path="/data/badge/add" element={<AddBadge />} />
              <Route path="/data/banner/add" element={<AddBanner />} />
              <Route path="/display/set" element={<SetMainDisplay />} />
              <Route path="/display/add" element={<AddMainDisplay />} />
              <Route path="/display/add" element={<AddMainDisplay />} />
              <Route path="/dlq/list" element={<DlqList />} />
            </Routes>
          </PageCol>
        </PageRow>
      </RightWrapper>
    </MainWrapper>
  );
}
