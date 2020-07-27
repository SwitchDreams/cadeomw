import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Routes from './routes';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />

        <GlobalStyles />
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
