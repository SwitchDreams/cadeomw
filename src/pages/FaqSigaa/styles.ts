import styled, { css } from 'styled-components';
import { ThemeType } from '../../App';

interface WindowProp {
  window: boolean;
  theme: ThemeType;
}

export const Main = styled.div<WindowProp>`
  max-width: 80%;
  margin: auto;

  color: ${({ theme }) => theme.colors.text};
  padding: 2vh 5vw;
  text-align: center;

  span.negrito {
    font-weight: bold;
  }

  h3 {
    font-weight: bold;

    &::after {
      content: '';
      height: 3px;
      width: 200px;
      background-color: ${({ theme }) => theme.colors.color};
      display: block;
      margin: 10px auto;
    }
  }

  p {
    padding-top: 30px;
    font-size: 17px;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
  }

  .message {
    height: 40px;

    .parsed {
      font-size: 20px;
    }

    .erro {
      font-size: 20px;
      color: #c33;
    }
  }

  .button {
    margin-top: 40px;

    button:hover {
      background-color: ${({ theme }) => theme.colors.color};
      color: white !important;
    }
  }

  .summary {
    button:hover {
      background-color: ${({ theme }) => theme.colors.color};
      color: white !important;
    }
  }

  .buttonForm {
    button:hover {
      background-color: ${({ theme }) => theme.colors.color};
      color: white !important;
    }
  }

  img {
    margin: 40px 0;

    & + & {
      margin: 0;
      margin-top: 0;
    }
    height: 35vh;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.7);
  }

  .oferta,
  .horarios,
  .creditos,
  .documentos,
  .docentes,
  .retirada,
  .trancamento {
    margin-top: 10vh;
  }

  ${props =>
    props.window &&
    css`
      max-width: 100%;

      img {
        width: 100%;
        margin: 10px 0;
      }
      h3 {
        font-size: 20px;
      }
    `};
`;

export const Title = styled.div<WindowProp>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;

  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  font-weight: bold;
  text-transform: initial;

  margin-bottom: 20px;
  padding: 10px;

  ${props =>
    props.window &&
    css`
      font-size: 30px;
    `};

  &::after {
    content: '';
    height: 3px;
    width: 200px;
    background-color: ${({ theme }) => theme.colors.color};
    display: block;
    margin: 10px auto;
  }
`;
