import styled from 'styled-components';
import { ThemeType } from '../../App';

export const Message = styled.div<{ theme: ThemeType }>`
  padding: 5px;

  &::after {
    content: '';
    height: 1px;
    width: 300px;
    background-color: ${({ theme }) => theme.colors.color};
    display: block;
    margin: 10px auto;
  }
`;

export const Response = styled.div``;
