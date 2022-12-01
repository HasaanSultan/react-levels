import { createGlobalStyle, css } from "styled-components";
import { ThemeProps } from "./theme.styles";

const GlobalStyles = createGlobalStyle<{ theme: ThemeProps }>`
 * {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
  }

  html {
    height:100%;
    overflow: hidden;
    font-size: 16px;
  
  }

    body {
    min-height:100vh;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.inputText};
    font-family: DM Sa;
    font-style: normal;
  }

  #root {
    min-height: 100vh;
  }
`;

export default GlobalStyles;
