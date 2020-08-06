import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Routes from './routes';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastProvider } from './hooks/toasts'
import { Helmet } from "react-helmet";

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <script data-ad-client="ca-pub-9432744401324317" async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
        </script>
      </Helmet>
      <ToastProvider>
        <BrowserRouter>
          <Routes />
          <GlobalStyles />
        </BrowserRouter>
      </ToastProvider>
      <Footer />
    </>
  );
};

export default App;
