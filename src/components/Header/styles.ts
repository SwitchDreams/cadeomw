import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Faixa1 = styled.div`
  background: #217580;
  height: 100px;

  img {
    height: 110px;
    margin: 50px 300px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const Faixa2 = styled.div`
  background: #f2f2f2;
  height: 100px;
  display: flex;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 100px;
  padding: 35px;
  width: 700px;

  a {
    text-decoration: none;
    border-top: 2px solid rgba(0, 50, 60, 0.8);
    width: 110px;
    height: 50px;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MenuText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #217580;
  margin-top: 10px;
`;
