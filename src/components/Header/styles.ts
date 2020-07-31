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

  div.scrolled {
    position: fixed !important;
    width: 100%;
    z-index: 999;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
    animation: slide-down 0.5s;
  }

  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 0.9;
      transform: translateY(0);
    }
  }
`;

export const WaveContainer = styled.div`
  height: 190px;
  svg {
    background: #7c4fe0;
  }
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
