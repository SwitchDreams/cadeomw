import React from 'react';

import { FooterContainer } from './styles';

interface FooterProps {
  window: boolean;
}

const Footer: React.FC<FooterProps> = ({ window }: FooterProps) => {
  return (
    <FooterContainer window={window}>
      <div className="waves">
        {window && (
          <svg width="100%" height="200px" fill="none">
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
        )}
        <p>&copy; 2020 Switch Dreams.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
