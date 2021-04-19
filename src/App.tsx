import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MUICookieConsent from 'material-ui-cookie-consent';

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
      <MUICookieConsent
        cookieName="Cookies"
        message="Este site usa cookies para melhorar a experiência do usuário. Caso deseje continuar, declara estar ciente da Política de Privacidade."
        acceptButtonLabel="Estou ciente."
      />
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
