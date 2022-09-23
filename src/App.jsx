import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import Test from './pages/main/Test';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
