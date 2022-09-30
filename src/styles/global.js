import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;  
    font-family: 'Pretendard';
  }

  body {
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;
