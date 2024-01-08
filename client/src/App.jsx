import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import loginPage from "./scenes/loginPage/LoginPage";
import homePage from "./scenes/homePage/HomePage";
import profilePage from "./scenes/profilePage/ProfilePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={loginPage} />
          <Route path="/home" Component={homePage} />
          <Route path="/profile/:userId" Component={profilePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
