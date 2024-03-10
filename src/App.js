import { useEffect, useState } from "react";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header/Index";
import Main from "./components/Main/Index";
import { ButtonContainer, Container } from "./styleApp";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Theme/theme";

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [theme, setTheme] = useState("light");

  const fetchLocalStorage = () => {
    const theme = localStorage.getItem("theme");
    setTheme(JSON.parse(theme) || "light");
  };

  useEffect(() => {
    fetchLocalStorage();
  }, []);

  const themeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", JSON.stringify("dark"));
    } else if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", JSON.stringify("light"));
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <Header userSearch={userSearch} setUserSearch={setUserSearch} />
        <Main userSearch={userSearch} />
        <GlobalStyles />
        <ButtonContainer onClick={() => themeToggle()}>
          Mode: {theme === "light" ? "Dark" : "Light"}
        </ButtonContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
