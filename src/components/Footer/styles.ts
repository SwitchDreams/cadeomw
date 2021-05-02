import styled from 'styled-components';
import { ThemeType } from '../../App';

export const FooterContainer = styled.div<{ theme: ThemeType }>`
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
      background: ${({ theme }) => theme.colors.color};
    }
  }
`;
