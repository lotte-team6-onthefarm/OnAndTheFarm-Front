import { Route, Routes } from "react-router-dom";
import Login from "./components/account/login/Login";
import Main from "./components/main/Main";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
