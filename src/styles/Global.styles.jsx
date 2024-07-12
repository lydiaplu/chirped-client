import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    font-family: 'Arial', sans-serif;
    /* background: #f5f5f5; */
    color: #333;
  }

  html{
    font-size: 10px;
  }

  body {
    line-height: 1.6;
    font-size: 16px;
  }

  button {
    font-family: inherit;
  }
`;
