import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }
    html {
      height: 100%;
    }
    body {
      //overflow: hidden;
      box-sizing: border-box;
      background: ${({ theme }) => theme.bg2};
      color: ${({ theme }) => theme.text};
      font-family: 'Inter', sans-serif;
    }
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }

`;
