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

    h4 {
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

export const FirstTextContainer = styled.div``;
