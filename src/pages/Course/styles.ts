import styled, { css } from 'styled-components';
import { makeStyles, createStyles } from '@material-ui/core/styles';

interface TabContentProps {
  selected: boolean;
}

interface ContentStatusProps {
  status: boolean;
}

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 850,
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

export const CourseNameContainer = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CourseName = styled.h1`
  margin-top: 50px;
  font-weight: bold;
  padding: 0 40px 0 40px;
  font-size: 40px;
  color: #585858;
  border-top: 1px solid #585858;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: rgb(38, 0, 77);
  height: 100px;
`;

export const TabContent = styled.div<TabContentProps>`
  background: rgb(38, 0, 77);

  ${props =>
    props.selected &&
    css`
      background: #fff;
    `}

  width: 250px;
  margin: 45px 0 0 50px;
  border-radius: 30px 30px 0 0;
  box-shadow: 4px 0 0 0 rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: row;
`;

export const TabText = styled.p<TabContentProps>`
  color: #fff;

  ${props =>
    props.selected &&
    css`
      color: #240a59;
    `}

  margin: auto;
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
`;

export const ContainerPage = styled.div``;

export const CardFluxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoContainerCard = styled.div`
  width: 25%;
  margin: 50px 30px 0 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Flux = styled.div`
  width: 45%;
  margin: 50px 0 100px 0;
`;

export const PeriodContainer = styled.div`
  background: rgba(110, 238, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);

  height: 60px;
  padding-left: 40px;
  display: flex;
  margin-bottom: 10px;
  width: 95%;
  align-items: center;
  cursor: pointer;
`;

export const PeriodText = styled.div`
  font-size: 18px;
  margin-left: 20px;
`;

export const ContentContainer = styled.div`
  margin-bottom: 35px;
`;

export const Content = styled.p`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

export const ContentText = styled.p`
  font-size: 18px;
  margin-left: 20px;
  height: 20px;
  width: 70%;
`;

export const ContentCreditsContainer = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 18px;
  height: 20px;
  width: 40%;
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
  margin-left: 10px;
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

export const CardSubjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 50px 100px 0 0;
`;

export const SubjectCardStyle = styled.div`
  min-width: 25%;
  margin: 70px 0px 30 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.h3``;
