import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

interface WindowProp {
  window: boolean;
}

export const useStylesCard = makeStyles({
  root: {},
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.9)',
  },
  title: {},
  pos: {},
});

export const Container = styled.div`
  width: 100%;
  margin-bottom: 200px;
`;

export const InfoGeralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background: rgba(120, 120, 120, 0.1);
  padding: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-right: 10px;
    height: 25px;
    width: 25px;
  }

  p {
    font-size: 15px;
  }

  strong {
    font-size: 15px;
    font-weight: bold;
    margin-right: 5px;
  }
`;

export const NoPrereq = styled.p<WindowProp>`
  font-size: 20px;
  color: #222;
  text-transform: capitalize;

  ${props =>
    props.window &&
    css`
      font-size: 12px;
    `};
`;

export const SubjectHeader = styled.h3<WindowProp>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;

  color: #222;
  font-size: 40px;
  font-weight: bold;
  text-transform: capitalize;

  margin-bottom: 20px;
  padding: 10px;

  ${props =>
    props.window &&
    css`
      font-size: 30px;
    `};

  &::after {
    content: '';
    height: 3px;
    width: 200px;
    background-color: #7c4fe0;
    display: block;
    margin: 10px auto;
  }
`;

export const PrereqContainer = styled.div<WindowProp>`
  display: flex;

  ${props =>
    props.window &&
    css`
      flex-direction: column;
    `};
`;

export const FeaturesContainer = styled.div<WindowProp>`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    max-width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${props =>
      props.window &&
      css`
        width: 100%;
      `};
  }

  div.MuiGrid-root {
    display: flex;
    justify-content: center;
  }

  h4 {
    font-size: 25px;
    color: #222;
    text-transform: capitalize;
    margin: 30px 0;
    text-align: center;

    ${props =>
      props.window &&
      css`
        font-size: 18px;
      `};
  }
`;

export const FeatureCardContainer = styled.div<WindowProp>`
  max-width: 100%;

  border-radius: 1.5rem;
  box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.3);
  margin: 20px;
  margin-bottom: 20px;
  padding: 30px;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: transform 0.3s ease 0s, -webkit-transform 0.3s ease 0s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 3rem rgba(31, 45, 61, 0.35) !important;
  }

  svg {
    align-self: center;
  }

  ${props =>
    props.window &&
    css`
      margin: 10px;
    `};
`;

export const CardTitleContainer = styled.div<WindowProp>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    margin-top: 5px;
  }

  ${props =>
    props.window &&
    css`
      h3 {
        font-size: 14px;
      }

      p {
        font-size: 12px;
      }
    `};
`;

export const OrLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;

  p {
    margin: 0 5px;
    font-weight: bold;
  }
`;

export const GraphicContainer = styled.div<WindowProp>`
  width: 50%;
  margin: auto;
  margin-top: 50px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);

  ${props =>
    props.window &&
    css`
      width: 90%;
    `};
`;
