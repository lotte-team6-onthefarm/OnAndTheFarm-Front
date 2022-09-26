import { Route, Routes } from 'react-router-dom';
import {
  SellerDelivery,
  SellerMain,
  SellerProducts,
  SellerPromotion,
  SellerStatistics,
  SellerUsers,
} from './pages/seller';
import MainIndexLayout from './pages/main/mainIndexLayout';
import SellerLoginPage from './pages/seller/account/login/sellerLoginPage';

function App() {
  return (
    <div className="App">
      <Routes>

        {/* 셀러 Router */}
        <Route exact path="/seller" element={<SellerMain />}></Route>
        <Route exact path="/seller/login" element={<SellerLoginPage />}></Route>
        <Route
          exact
          path="/seller/products"
          element={<SellerProducts />}
        ></Route>
        <Route
          exact
          path="/seller/promotion"
          element={<SellerPromotion />}
        ></Route>
        <Route exact path="/*" element={<MainIndexLayout />} />
        <Route
          exact
          path="/seller/delivery"
          element={<SellerDelivery />}
        ></Route>
        <Route
          exact
          path="/seller/statistics"
          element={<SellerStatistics />}
        ></Route>
        <Route exact path="/seller/users" element={<SellerUsers />}></Route>
      </Routes>
    </div>
  );
}

export default App;
