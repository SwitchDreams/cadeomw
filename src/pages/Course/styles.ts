import styled from 'styled-components';

export const Container = styled.div`
  font-weight: bold;
  display: flex;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  align-items: center;
  background: #217580;

  a {
    margin: auto;
    text-decoration: none;
  }
`;

export const TabText = styled.p`
  color: #fff;
  font-size: 25px;
  margin-top: 10px;
`;

export const InfoContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;

`;
