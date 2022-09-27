import { Route, Routes } from 'react-router-dom';
import MainIndexLayout from './pages/main/mainIndexLayout';
import SellerIndexLayout from './pages/seller/sellerIndexLayout';

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
        {/* seller Router */}
        <Route exact path="/seller/*" element={<SellerIndexLayout />} />
      </Routes>
    </div>
  );
}

export default App;
