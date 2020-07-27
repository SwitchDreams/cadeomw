import React from 'react';

import { Grid } from '@material-ui/core';
import { FooterContainer } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <hr />
      <div className="copyright">
        <p>&copy; 2020 Switch Dreams.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
