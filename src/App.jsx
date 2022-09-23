import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import Test from './pages/main/Test';
import Main from './components/main/Main';
import SellerLoginPage from './pages/seller/account/login/sellerLoginPage';
import IndexPage from './pages/seller/indexPage';
import SellerMainPage from './pages/seller/main/sellerMainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/test" element={<Test />} />
        <Route path="/" element={<Main />} />
        <Route exact path="/seller" element={<IndexPage />} />
        <Route
          exact
          path="/sellerMainPage"
          element={<SellerMainPage />}
        ></Route>
        <Route
          exact
          path="/sellerLoginPage"
          element={<SellerLoginPage />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
