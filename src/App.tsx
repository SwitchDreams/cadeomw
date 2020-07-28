import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Routes from './routes';
import Footer from './components/Footer';

import { ToastProvider } from './hooks/toasts'

const App: React.FC = () => {
  return (
    <>
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
