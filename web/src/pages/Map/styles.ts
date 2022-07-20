import styled, { css } from 'styled-components';
import { ThemeType } from '../../App';

interface AllContainerProps {
  window: boolean;
  theme: ThemeType;
}

export const Title = styled.div<{ theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 50px;
    font-weight: bold;
    padding: 0 40px 0 40px;
    font-size: 40px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};

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

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocalesList = styled.ul<AllContainerProps>`
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  white-space: nowrap;
  width: auto;
  background: ${({ theme }) => theme.colors.map_color};

  ${props =>
    !props.window &&
    css`
      &::-webkit-scrollbar {
        background-color: transparent;
        width: 2px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 7px;
        background-color: #ddd;
      }
    `}

  li {
    display: inline-block;
    text-align: center;
    padding: 10px;
    border-radius: 7px;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.map_hover};
    }

    h5 {
      font-weight: bold;
    }
    p {
      padding: 0;
      margin-bottom: 5px;
      width: 250px;
    }
  }

  ${props =>
    props.window &&
    css`
      li {
        h5 {
          font-size: 13px;
        }
        p {
          font-size: 12px;
          width: 200px;
        }
      }
    `}
`;

export const SearchButton = styled.div<{ theme: ThemeType }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  button {
    margin: auto;
    height: 50px;
    width: 200px;
    color: ${({ theme }) => theme.colors.color};

    background: ${({ theme }) => theme.colors.body};
    border: 2px solid ${({ theme }) => theme.colors.color};
    border-radius: 10px;

    &:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.color};
      transition: 0.7s;
      color: #fff;
    }
  }
`;
export const ModalText = styled.div`
  form {
    input {
      padding: 10px;
      height: 50px;
      width: 100%;
    }
  }
`;
