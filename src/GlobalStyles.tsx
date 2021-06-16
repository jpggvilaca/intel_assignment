import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;
    background: black;
  }

  button,
  input {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
  }
`;

export const Main = styled.main`
  color: #fff;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: 1200px;
  padding: 24px;
`;

export const Title = styled.h1`
  margin: 0 auto;
  padding: 24px;
`;

export default GlobalStyles;
