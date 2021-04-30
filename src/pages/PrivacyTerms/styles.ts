import styled, { css } from 'styled-components';

interface WindowProp {
  window: boolean;
}

export const Main = styled.div<WindowProp>`
  max-width: 80%;
  margin: auto;

  color: #222;
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
      background-color: #7c4fe0;
      display: block;
      margin: 10px auto;
    }
  }

  p {
    padding-top: 30px;
    font-size: 17px;
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

  color: #222;
  font-size: 40px;
  font-weight: bold;
  text-transform: initial;

  margin-bottom: 5px;
  padding: 10px;


`;
