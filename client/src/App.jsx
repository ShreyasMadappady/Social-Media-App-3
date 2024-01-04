import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import homePage from "scenes/homePage/homePage";
import loginPage from "scenes/loginPage/loginPage";
import profilePage from "scenes/profilePage/profilePage";
import { themeSettings } from "theme";

function App() {
  const mode = useSelector((state) => {
    state.mode;
  });

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" Component={loginPage} />
            <Route path="/home" Component={homePage} />
            <Route path="/profile/:userId" Component={profilePage} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
