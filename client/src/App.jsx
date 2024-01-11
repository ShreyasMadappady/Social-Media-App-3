import { BrowserRouter, Route, Routes } from "react-router-dom";
import homePage from "./scenes/homePage/HomePage";
import profilePage from "./scenes/profilePage/ProfilePage";
import LoginPage from "./scenes/loginPage/LoginPage";
import RegisterPage from "./scenes/registerPage/RegisterPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
          <Route path="/home" Component={homePage} />
          <Route path="/profile/:userId" Component={profilePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
