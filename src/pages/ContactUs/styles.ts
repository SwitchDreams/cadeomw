import styled, { css } from 'styled-components';
import { ThemeType } from '../../App';

interface WindowProps {
  window: boolean;
  theme: ThemeType;
}

export const Container = styled.div`
  span.negrito {
    font-weight: bold;
  }
`;

export const WhoWeAreContainer = styled.div<{ theme: ThemeType }>`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  margin-bottom: 15px;

  button {
    margin-bottom: 30px;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.color};
    color: white !important;
  }

  .container {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h2 {
      font-size: 40px;
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

    h4 {
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

    h5 {
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
      padding-top: 10px;
      font-size: 17px;
    }
  }
`;

export const CardsContainer = styled.div<WindowProps>`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  justify-content: center;

  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .containercards {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;

      .card {
        width: 45%;
        display: flex;
        flex-direction: row;

        margin: 0 10px 20px 0;
        padding: 5px;

        border-radius: 5px;
        border: 3px solid ${({ theme }) => theme.colors.color};
        background: ${({ theme }) => theme.colors.color};
        color: ${({ theme }) => theme.colors.body};

        .images {
          position: relative;

          img.profile {
            height: 150px;
            width: 150px;
            border-radius: 5px;
          }

          img.switch-dreams {
            position: absolute;
            top: 0;
            right: 0;
          }
        }

        .text {
          display: flex;
          flex-direction: column;
          margin: 10px 0 0 20px;
          color: #fff;

          h6 {
            font-weight: bold;
            font-size: 20px;
          }
          p {
            font-size: 17px;
            margin-bottom: 5px;
          }

          .link {
            display: flex;
            flex-direction: row;
            align-items: center;

            a {
              color: #fff;
              margin-left: 5px;
            }
          }
        }
      }
    }

    ${props =>
      props.window &&
      css`
        flex-direction: column;

        .containercards {
          flex-direction: column;

          .card {
            width: 100%;
            flex-direction: row;
            margin: auto;
            margin-bottom: 20px;

            img {
              height: 130px;
              width: 130px;
            }

            .text {
              width: 50%;
              h6 {
                font-size: 17px;
              }
              p {
                font-size: 14px;
              }
            }
          }
        }
      `};
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .contact-form {
  }

  .contact-email {
  }
`;
