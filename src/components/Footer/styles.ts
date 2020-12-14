import styled, { css } from 'styled-components';

interface FooterProps {
  window: boolean;
}

export const FooterContainer = styled.div<FooterProps>`
  background-color: transparent;

  .waves {
    padding: 0;
    margin: 0;
    height: 50px;

    p {
      text-align: center;
      color: #fff;
      height: 30px;
      margin-bottom: 0;
      background: #7c4fe0;
    }

    ${props =>
      !props.window &&
      css`
        background: #7c4fe0;

        p {
          padding-top: 20px;
        }
      `}
  }
`;
