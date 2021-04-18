import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles, { AllContainer } from './styles/global';

import Routes from './routes';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastProvider } from './hooks/toasts';
import createServer from './services/mock';

createServer();

const App: React.FC = () => (
  <>
    <AllContainer>
      <ToastProvider>
        <BrowserRouter>
          <Routes />
          <GlobalStyles />
        </BrowserRouter>
      </ToastProvider>
    </AllContainer>
    <Footer />
  </>
);

export default App;
