import styled, { css } from 'styled-components';
import { ThemeType } from '../../App';

interface ContainerProps {
  transparent: boolean;
  scrolled: boolean;
  theme: ThemeType;
}

export const Container = styled.div<ContainerProps>`
  background: rgb(124, 79, 224);

  .custom-switch {
    margin: auto 25px;
  }

  ${props =>
    props.transparent &&
    css`
      background: transparent;
    `}

  a.nav-link {
    margin: 0 15px !important;
    position: relative;

    &,
    &::after,
    &::before {
      transition: all 0.3s;
    }

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 0%;
      content: '.';
      color: transparent;
      background: #7c4fe0;
      ${props =>
        props.scrolled &&
        css`
          background: #fff;
        `}
      height: 2px;
    }

    &:hover::after {
      width: 100%;
    }

    &.active::after {
      width: 100%;
    }
  }

  div.scrolled {
    position: fixed !important;
    width: 100%;
    z-index: 999;
    background: ${({ theme }) => theme.colors.body};
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

export const WaveContainer = styled.div<{ theme: ThemeType }>`
  height: 190px;
  svg {
    background: ${({ theme }) => theme.colors.color};
  }
`;

export const Menu = styled.div<{ theme: ThemeType }>`
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
