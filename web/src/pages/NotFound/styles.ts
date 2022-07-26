import styled from 'styled-components';
import { ThemeType } from '../../App';

export const NotFoundContainer = styled.div<{ theme: ThemeType }>`
  margin-top: 50px;
  padding: 0 40px 0 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  h2 {
    font-size: 40px;
    font-weight: bold;
    text-transform: initial;

    &::after {
      content: '';
      height: 3px;
      width: 200px;
      background-color: ${({ theme }) => theme.colors.color};
      display: block;
      margin: 10px auto;
    }
  }
`;
