import styled from 'styled-components';
import unbLogo from '../../assets/giphy.gif';

export const Container = styled.div`
  .curved {
    background: linear-gradient(
        0deg,
        rgba(255, 0, 77, 0.4),
        rgba(255, 0, 77, 0.4)
      ),
      url(${unbLogo});
    background-size: cover;

    div.space {
      height: 300px;
    }

    svg {
      display: block;
    }
  }
`;
