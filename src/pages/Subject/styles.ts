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
  text-transform: initial;

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
  text-transform: initial;

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
  margin-top: 40px;

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
    font-weight: bold;
    color: #222;
    text-transform: initial;
    margin-bottom: 20px;
    text-align: center;
    padding: 10px;

    &::after {
      content: '';
      height: 2px;
      width: 100px;
      background-color: #7c4fe0;
      display: block;
      margin: 10px auto;
    }
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

export const CardFeatureContainer = styled.div<WindowProp>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  h4 {
    font-size: 25px;
    font-weight: bold;
    color: #222;
    text-transform: initial;
    margin-bottom: 20px;
    text-align: center;
    padding: 10px;

    &::after {
      content: '';
      height: 2px;
      width: 100px;
      background-color: #7c4fe0;
      display: block;
      margin: 10px auto;
    }
  }
`;

export const EquivalencesContainer = styled.div<WindowProp>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;

  justify-content: center;
  width: 100%;
  padding: 0 100px 0 100px;

  & + & {
    margin-top: 40px;
  }

  ${props =>
    props.window &&
    css`
      flex-direction: column;
      flex: 1;
      padding: 0;

      & + & {
        margin-top: 0;
      }
    `};
`;

export const EquivalenceBox = styled.div<WindowProp>`
  background: #7c4fe0;
  min-height: 180px;
  max-width: 15%;
  border-radius: 10px;
  box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
  margin: 15px;
  padding: 10px;
  cursor: pointer;

  h5 {
    font-size: 16px;
    font-weight: bold;
    margin: 10px;
  }

  p,
  ul {
    margin: 3px;
    text-align: center;
    list-style-position: inside;
    ul {
      font-size: 12px;
    }
  }

  transition: transform 0.3s ease 0s, -webkit-transform 0.3s ease 0s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 3rem rgba(31, 45, 61, 0.35) !important;
  }

  ${props =>
    props.window &&
    css`
      margin-bottom: 10px;
      max-width: 90%;
      min-height: 100px;
    `};
`;

export const NoEquivalences = styled.p<WindowProp>`
  font-size: 20px;
  color: #222;
  text-transform: capitalize;
  text-align: center;
  margin: auto;

  ${props =>
    props.window &&
    css`
      font-size: 12px;
    `};
`;

export const NotExistingSubject = styled.div`
  text-align: center;
  max-width: 100%;

  h2 {
    font-size: 14px;
  }
`;

export const OfertaContainer = styled.div<WindowProp>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 10px;

  h4 {
    font-size: 25px;
    font-weight: bold;
    color: #222;
    text-transform: initial;
    margin-bottom: 20px;
    text-align: center;
    padding: 10px;

    &::after {
      content: '';
      height: 2px;
      width: 100px;
      background-color: #7c4fe0;
      display: block;
      margin: 10px auto;
    }
  }

  table {
    width: 50%;

    td,
    th {
      padding: 10px;
      text-align: center;
    }

    tr {
      &:nth-child(even) {
        background-color: #ddd;
      }
      &:hover {
        background-color: #eee;
      }
    }
  }

  ${props =>
    props.window &&
    css`
      table {
        width: 90%;
        font-size: 13px;

        td {
          padding: 5px;
          max-width: 150px;
          div {
            width: 100%;
          }
        }
      }
    `};
`;
