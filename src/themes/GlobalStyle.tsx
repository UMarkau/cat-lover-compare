import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    color: ${({ theme }) => theme.darkGrayColor};
    font-family: 'PT Sans';
    font-style: normal;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button {
    all: unset;
    cursor: pointer;
  }
`;
