import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;  
  }

  body {
    box-sizing: border-box;
  }

  a{
    text-decoration-line: none;
  }
`;

export default GlobalStyle;
