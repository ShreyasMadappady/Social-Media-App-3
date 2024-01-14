import { BrowserRouter, Route, Routes } from "react-router-dom";
import profilePage from "./scenes/profilePage/ProfilePage";
import LoginPage from "./scenes/loginPage/LoginPage";
import RegisterPage from "./scenes/registerPage/RegisterPage";
import React from "react";
import { Suspense } from "react";
const homePage = React.lazy(() => import("./scenes/homePage/HomePage.jsx"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
          <Route
            path="/home"
            Component={
              <Suspense fallback={<div>Loading...</div>}>
                <homePage />
              </Suspense>
            }
          />
          <Route path="/profile/:userId" Component={profilePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
