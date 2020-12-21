import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles, { AllContainer } from './styles/global';

import Routes from './routes';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastProvider } from './hooks/toasts';

const App: React.FC = () => {
  const [windowCheck, setWindowCheck] = useState(true);

  useEffect(() => {
    if (window.innerWidth >= 1950) {
      setWindowCheck(false);
    }
  }, []);

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1950) {
      setWindowCheck(false);
    } else {
      setWindowCheck(true);
    }
  });

  return (
    <>
      <AllContainer>
        <ToastProvider>
          <BrowserRouter>
            <Routes />
            <GlobalStyles />
          </BrowserRouter>
        </ToastProvider>
      </AllContainer>
      <Footer window={windowCheck} />
    </>
  );
};

export default App;
