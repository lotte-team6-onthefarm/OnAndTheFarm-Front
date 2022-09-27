import { Route, Routes } from 'react-router-dom';
import MainIndexLayout from './pages/main/mainIndexLayout';
import SellerIndexLayout from './pages/seller/sellerIndexLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* user Router */}
        <Route exact path="/*" element={<MainIndexLayout />} />
        {/* seller Router */}
        <Route exact path="/seller/*" element={<SellerIndexLayout />} />
      </Routes>
    </div>
  );
}

export default App;
