import { Route, Routes } from 'react-router-dom';
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
        <Route path="seller/login" element={<SellerLoginPage />} />
        <Route path="seller/signup" element={<SellerSignupPage />} />
        <Route path="seller/searchId" element={<SellerSearchId />} />
        <Route path="seller/searchPw" element={<SellerSearchPw />} />
        <Route path="snstest" element={<SnsTest />} />
      </Routes>
    </div>
  );
}

export default App;
