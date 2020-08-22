import styled from 'styled-components';

export const FeatureCardContainer = styled.div`
  width: 320px;
  height: 260px;
  border-radius: 1.5rem;
  box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;

  .content-container {
    max-width: 70%;
    max-height: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .text-container {
      h5 {
        font-weight: bold;
        margin: 5px;
        color: black;
      }
    }
  }

  transition: transform 0.3s ease 0s, -webkit-transform 0.3s ease 0s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 3rem rgba(31, 45, 61, 0.35) !important;
  }
`;
