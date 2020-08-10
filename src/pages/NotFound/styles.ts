import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  margin-top: 50px;
  padding: 0 40px 0 40px;
  text-align: center;
  color: #585858;

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
`;
