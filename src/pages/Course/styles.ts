import styled, { css } from 'styled-components';
import { makeStyles, createStyles } from '@material-ui/core/styles';

interface TabContentProps {
  selected: boolean;
  window: boolean;
}

interface ContentStatusProps {
  status: boolean;
}

interface AllContainerProps {
  window: boolean;
}

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
    },
    container: {},
  }),
);

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

export const AllContainer = styled.div<AllContainerProps>`
  width: 100%;

  ${props =>
    props.window &&
    css`
      display: flex;
      flex-direction: column;
    `}
`;

export const CourseNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CourseName = styled.h1`
  margin-top: 50px;
  font-weight: bold;
  padding: 0 40px 0 40px;
  font-size: 40px;
  text-align: center;
  color: #585858;

  &::after {
    content: '';
    height: 3px;
    width: 200px;
    background-color: #7c4fe0;
    display: block;
    margin: 10px auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  height: 100px;
`;

export const TabContent = styled.div<TabContentProps>`
  background: #7c4fe0;
  width: 10%;

  ${props =>
    props.selected &&
    css`
      background: rgba(124, 79, 224, 0.5);
    `}

  ${props =>
    props.window &&
    css`
      width: 30%;
    `}

  margin: 45px 0 0 50px;
  border-radius: 30px;
  box-shadow: 4px 0 0 0 rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: row;
`;

export const TabText = styled.p<TabContentProps>`
  color: #fff;
  margin: auto;
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;

  ${props =>
    props.window &&
    css`
      font-size: 20px;
    `}
`;

export const ContainerPage = styled.div``;

export const CardFluxContainer = styled.div<AllContainerProps>`
  display: flex;
  flex-direction: row;

  ${props =>
    props.window &&
    css`
      flex-direction: column;
      align-items: center;
    `}
`;

export const InfoContainerCard = styled.div<AllContainerProps>`
  width: 20%;
  margin: 50px 30px 0 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${props =>
    props.window &&
    css`
      width: 80%;
      margin: 0;
    `}
`;

export const FluxContainer = styled.div<AllContainerProps>`
  width: 45%;
  margin: 50px 0 100px 0;

  ${props =>
    props.window &&
    css`
      width: 100%;
      padding: 0 20px;
      margin: 0;
    `}
`;

export const PeriodContainer = styled.div`
  background: rgba(110, 238, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);

  height: 60px;
  padding-left: 40px;
  margin-bottom: 10px;

  width: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  cursor: pointer;
`;

export const PeriodText = styled.div<AllContainerProps>`
  font-size: 18px;

  margin: 0 20px 0 20px;

  ${props =>
    props.window &&
    css`
      font-size: 12px;
      margin: 0 5px 0 5px;
    `}
`;

export const ContentContainer = styled.div`
  height: 45px;
  width: 90%;
  border-radius: 10px;
  margin: 10px 0 10px 0;

  &:hover {
    background: #eee;
    cursor: pointer;
  }
`;

export const Content = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

export const ContentText = styled.p<AllContainerProps>`
  font-size: 18px;
  height: 20px;
  width: 70%;
  margin-left: 30px;

  ${props =>
    props.window &&
    css`
      font-size: 12px;
      margin: 0 5px;
    `}
`;

export const ContentCreditsContainer = styled.div<AllContainerProps>`
  display: flex;
  flex-direction: row;

  font-size: 18px;
  height: 20px;
  width: 40%;

  ${props =>
    props.window &&
    css`
      font-size: 12px;
    `}
`;

export const ContentCredits = styled.p`
  margin-left: 10px;
  display: flex;
  flex-direction: row;
`;

export const Credit = styled.p`
  margin-left: 0 5px 0 10px;
`;

export const CreditText = styled.p`
  margin-left: 5px;
`;

export const ContentStatus = styled.p<ContentStatusProps>`
  margin-right: 40px;
  font-size: 13px;
  font-weight: bold;
  color: #f90;
  width: 25%;

  ${props =>
    props.status &&
    css`
      color: #080;
    `}
`;

export const CardSubjectsContainer = styled.div<AllContainerProps>`
  display: flex;
  flex-direction: column;
  width: 25%;

  margin-top: 50px;

  ${props =>
    props.window &&
    css`
      margin-top: 0;
      font-size: 12px;
      width: 80%;
    `}
`;
