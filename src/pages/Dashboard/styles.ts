import styled from 'styled-components';
import unbLogo from '../../assets/giphy.gif';

export const WavesContainer = styled.div`
  .curved {
    background: linear-gradient(
        0deg,
        rgba(255, 0, 77, 0.4),
        rgba(255, 0, 77, 0.4)
      ),
      url(${unbLogo});
    background-size: cover;

    svg {
      display: block;
    }
  }
`;

export const LandingText = styled.div`
  div.space {
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
      text-transform: uppercase;
      color: white;
    }
  }
`;

export const FirstTextContainer = styled.div`
  color: black;
  display: flex;
  justify-content: center;

  .text-container {
    max-width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h2 {
      font-size: 40px;
      font-weight: bold;
      text-transform: uppercase;

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

  .center-features {
    max-width: 70%;
  }

  div.MuiGrid-root {
    display: flex;
    justify-content: center;
  }
`;
