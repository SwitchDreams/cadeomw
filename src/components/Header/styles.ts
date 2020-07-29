import styled, { css } from 'styled-components';

interface ContainerProps {
  transparent: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: rgb(124, 79, 224);

  ${props =>
    props.transparent &&
    css`
      background: transparent;
    `}
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;
  padding: 35px;
  width: 700px;

  a {
    text-decoration: none;
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
  color: #fff;
  margin-top: 10px;
`;
