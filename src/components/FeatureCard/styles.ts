import styled from 'styled-components';

export const FeatureCardContainer = styled.div`
  width: 320px;
  height: 240px;
  border-radius: 1.5rem;
  box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.3);

  display: flex;

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .text-container {
      h3 {
        font-weight: bold;
        margin: 5px;
        color: black;
      }
    }
  }

  /* transition: traform 0.3s ease 0s, -webkit-transform 0.3s ease 0s; */
`;
