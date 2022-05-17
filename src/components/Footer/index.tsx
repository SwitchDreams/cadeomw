import React from 'react';

import { FooterContainer } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="waves">
        <svg
          width="100%"
          height="200px"
          fill="none"
          viewBox="0 0 1400 180"
          preserveAspectRatio="none"
        >
          <path
            fill="#7c4fe0"
            d="
                M 0 67
                C 273,183
                  822,-40
                  1920,106

                V 359
                H 0
                V 67
                Z"
          >
            <animate
              repeatCount="indefinite"
              fill="#454599"
              attributeName="d"
              dur="15s"
              values="
                    M0 77
                    C 473,283
                    822,-40
                      1920,116

                      V 359
                    H 0
                    V 67
                    Z;

                    M0 77
                    C 473,-40
                      1222,283
                      1920,136

                    V 359
                    H 0
                    V 67
                    Z;

                    M0 77
                    C 973,260
                    1722,-53
                    1920,120

                    V 359
                    H 0
                    V 67
                    Z;

                    M0 77
                    C 473,283
                    822,-40
                    1920,116

                    V 359
                    H 0
                    V 67
                    Z
                    "
            />
          </path>
        </svg>
        <p>
          <a href="https://switchdreams.com.br" style={{ color: '#ffffff' }}>
            &copy; 2022 Switch Dreams |{' '}
          </a>
          <a href="/privacy-terms" style={{ color: '#ffffff' }}>
            {' '}
            Termos e condições{' '}
          </a>
        </p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
