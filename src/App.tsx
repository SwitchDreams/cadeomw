import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyles, { AllContainer } from './styles/global';

import Routes from './routes';
import Footer from './components/Footer';
import * as themes from './theme/schema.json';
import { getFromLS, setToLS } from './utils/localStorage';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastProvider } from './hooks/toasts';
import createServer from './services/mock';

import GlobalStyles, { AllContainer } from './styles/global';

createServer();

export type ThemeType = typeof themes.data.light;

const App: React.FC = () => {
  setToLS('all-themes', themes);
  const [theme, setTheme] = useState(themes.data.light);

  useEffect(() => {
    const localTheme = getFromLS('theme');
    if (localTheme) setTheme(localTheme);
    else setTheme(themes.data.light);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AllContainer>
        <ToastProvider>
          <BrowserRouter>
            <Routes />
            <GlobalStyles />
          </BrowserRouter>
        </ToastProvider>
      </AllContainer>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
