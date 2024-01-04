import { BrowserRouter, Route, Routes } from "react-router-dom";
import homePage from "scenes/homePage/homePage";
import loginPage from "scenes/loginPage/loginPage";
import profilePage from "scenes/profilePage/profilePage";

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
