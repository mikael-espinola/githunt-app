import { useState } from "react";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header/Index";
import Main from "./components/Main/Index";

function App() {
  const [userSearch, setUserSearch] = useState();
  return (
    <div>
      <Header setUserSearch={setUserSearch} />
      <Main userSearch={userSearch} />
      <GlobalStyles />
    </div>
  );
}

export default App;
