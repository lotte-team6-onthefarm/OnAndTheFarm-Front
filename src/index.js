import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ReactQueryDevtools } from 'react-query/devtools';
import ScrollToTop from './components/common/ScrollToTop';
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 윈도우에 focus가 되면 데이터를 다시 가져오는 것
      refetchOnMount: false, // DOM에 컴포넌트가 처음 생성되었을 때 데이터를 가져오는 것
    },
  },
});
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
  </QueryClientProvider>,
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
