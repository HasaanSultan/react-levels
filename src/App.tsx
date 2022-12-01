import React from "react";
import UserLevel from "./containers/UserLevel";
import logo from "./logo.svg";
import GlobalStyles from "./styles/globals.styles";
import { lightTheme } from "./styles/theme.styles";

function App() {
  return (
    <div className="App">
      <GlobalStyles theme={lightTheme} />
      <UserLevel />
    </div>
  );
}

export default App;
