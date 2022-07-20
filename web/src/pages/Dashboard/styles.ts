import styled from 'styled-components';
import unbLogo from '../../assets/unb.svg';
import unbAntiga from '../../assets/unb_antiga.jpg';
import { ThemeType } from '../../App';

export const WavesContainer = styled.div`
  .curved {
    background: linear-gradient(
        0deg,
        rgba(124, 79, 224, 0.75),
        rgba(124, 79, 224, 0.75)
      ),
      url(${unbLogo});
    background-size: cover;

    svg {
      display: block;
    }
  }
`;

export const LandingText = styled.div`
  .space {
    height: 400px;
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

export const FirstTextContainer = styled.div<{ theme: ThemeType }>`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  padding: 40px 0;

  .container {
    max-width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    button:hover {
      background-color: ${({ theme }) => theme.colors.color};
      color: white !important;
    }

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

    p {
      padding-top: 30px;
    }
  }
`;

export const FeaturesContainer = styled.div`
  margin: 40px 0;

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

export const AboutUsContainer = styled.div<{ theme: ThemeType }>`
  padding-top: 40px;
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
      background-color: ${({ theme }) => theme.colors.color};
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
      background-color: ${({ theme }) => theme.colors.color};
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
        color: ${({ theme }) => theme.colors.text};
        font-size: 14px;
      }

      h6 {
        margin-top: 10px;
        margin-bottom: 0;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.text};
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

export const YouWillFind = styled.div<{ theme: ThemeType }>`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: center;

  .grade {
    max-width: 70%;
    margin: auto;
  }

  h2 {
    font-size: 30px;
    font-weight: bold;
    text-transform: initial;
    text-align: center;

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
