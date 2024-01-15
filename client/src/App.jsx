import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./scenes/profilePage/ProfilePage";
import LoginPage from "./scenes/loginPage/LoginPage";
import RegisterPage from "./scenes/registerPage/RegisterPage";
import HomePage from "./scenes/homePage/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
          <Route path="/home" Component={HomePage} />
          <Route path="/profile/:userId" Component={ProfilePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
