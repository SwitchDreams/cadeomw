import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />

      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
