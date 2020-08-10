import styled from 'styled-components';
import droneUnB from '../../assets/unb.svg';
import unbAntiga from '../../assets/unb_antiga.jpg';

export const WavesContainer = styled.div`
  .curved {
    background: linear-gradient(
        0deg,
        rgba(124, 79, 224, 0.75),
        rgba(124, 79, 224, 0.75)
      ),
      url(${droneUnB});
    background-size: cover;

    svg {
      display: block;
    }
  }
`;

export const LandingText = styled.div`
  .space {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
      font-size: 50px;
      font-weight: bold;
      text-transform: uppercase;
      color: white;
    }

    p {
      font-size: 20px;
      font-weight: bold;
      text-transform: initial;
      color: white;
      max-width: 90%;
    }
  }
`;

export const FirstTextContainer = styled.div`
  color: #222;
  display: flex;
  justify-content: center;

  .container {
    max-width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h2 {
      font-size: 40px;
      font-weight: bold;
      text-transform: initial;

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
    }
  }
`;

export const FeaturesContainer = styled.div`
  margin: 100px 0;

  display: flex;
  justify-content: center;

  .container {
    max-width: 70%;
  }

  div.MuiGrid-root {
    display: flex;
    justify-content: center;
  }
`;

export const ParallaxImage = styled.section`
  width: 100%;
  height: 300px;

  background-image: url(${unbAntiga});

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const AboutFeatures = styled.section`
  padding: 70px 0;
  background-color: rgb(246, 249, 254);

  display: flex;
  justify-content: center;

  .container {
    max-width: 80%;
  }
`;

export const ListContainer = styled.div`
  .title-text {
    h2 {
      color: #222;
      font-size: 40px;
      font-weight: bold;
      text-transform: initial;
      padding-bottom: 5px;

      &::after {
        content: '';
        height: 3px;
        width: 200px;
        background-color: #7c4fe0;
        display: block;
        margin: 10px 0;
      }
    }

    p {
      padding-bottom: 10px;
    }
  }

  ul {
    padding: 10px 0;

    li {
      padding: 8px 0;
      list-style: none;
      display: flex;
      flex-direction: row;

      .logo {
        padding-right: 30px;

        span {
          height: 54px;
          width: 54px;
          display: flex;
          text-align: center;
          line-height: 54px;
          color: #7c4fe0;
          border-radius: 4px;
          background-color: #fff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          align-items: center;
          justify-content: center;
        }
      }

      .text {
        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: #565656;
          margin-bottom: 0;
        }
      }
    }
  }
`;

export const AboutUsContainer = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  span.negrito {
    font-weight: bold;
  }

  h2 {
    max-width: 70%;
    font-size: 40px;
    font-weight: bold;
    text-transform: initial;
    text-align: center;

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
    text-align: center;
    font-size: 15px;
    margin-bottom: 50px;
    max-width: 90%;
  }

  .button {
    margin-top: 40px;

    button:hover {
      background-color: #7c4fe0;
      color: white !important;
    }
  }

  .person {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;

    .profile {
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }

    .contact {
      text-align: center;

      a {
        text-decoration: none;
        color: #414141;
        font-size: 14px;
      }

      h6 {
        margin-top: 10px;
        margin-bottom: 0;
        font-weight: bold;
        color: #414141;
      }

      .insta {
        svg {
          color: #bc2a8d;
        }
      }

      .face {
        svg {
          color: #4267b2;
        }
      }
    }
  }
`;

export const PersonContainer = styled.div``;
