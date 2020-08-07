import styled, { css } from 'styled-components';

interface WindowProps {
  window: boolean;
}

export const Container = styled.div`
  body {
    @keyframes play24 {
      0% {
        background-position: 0px 0px;
      }
      100% {
        background-position: -15744px 0px;
      }
    }
    .shapeshifter {
      animation-duration: 1000ms;
      animation-timing-function: steps(24);
      animation-fill-mode: forwards;
      width: 656px;
      height: 656px;
      background-repeat: no-repeat;
    }
    .shapeshifter.play {
      animation-name: play24;
    }
  }
`;

export const WhoWeAreContainer = styled.div`
  color: #222;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

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
        background-color: #7c4fe0;
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
  color: #222;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
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
        border: 3px solid #7c4fe0;
        background: #7c4fe0;
        color: #fff;

        img {
          height: 150px;
          width: 150px;
          border-radius: 5px;
        }

        .text {
          display: flex;
          flex-direction: column;
          margin: 10px 0 0 20px;

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
            width: 90%;
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
