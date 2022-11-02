import { Route, Routes } from 'react-router-dom';
import AddFeed from './components/sns/feed/addFeed/AddFeed';
import AdminIndexLayout from './pages/admin/AdminIndexLayout';
import MainIndexLayout from './pages/main/mainIndexLayout';
import { SellerSearchId, SellerSearchPw } from './pages/seller';
import SellerLoginPage from './pages/seller/account/login/sellerLoginPage';
import SellerSignupPage from './pages/seller/account/signup/sellerSignupPage';
import SellerIndexLayout from './pages/seller/sellerIndexLayout';
import SnsTest from './pages/snsTest';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/*" element={<MainIndexLayout />} />
        <Route exact path="/seller/*" element={<SellerIndexLayout />} />
        <Route exact path="/admin/*" element={<AdminIndexLayout />} />
        <Route path="seller/login" element={<SellerLoginPage />} />
        <Route path="seller/signup" element={<SellerSignupPage />} />
        <Route path="seller/searchId" element={<SellerSearchId />} />
        <Route path="seller/searchPw" element={<SellerSearchPw />} />
        <Route path="snstest" element={<SnsTest />} />
        <Route path="/sns/add" element={<AddFeed />} />
      </Routes>
    </div>
  );
}

export default App;
