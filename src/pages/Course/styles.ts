import styled, { css } from 'styled-components';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { shade } from 'polished';
import { ThemeType } from '../../App';

interface TabContentProps {
  selected: boolean;
  window: boolean;
  theme: ThemeType;
}

interface ContentStatusProps {
  status: boolean;
  theme: ThemeType;
}

interface AllContainerProps {
  window: boolean;
  theme: ThemeType;
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

export const CourseName = styled.h1<{ theme: ThemeType }>`
  margin-top: 50px;
  font-weight: bold;
  padding: 0 40px 0 40px;
  font-size: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  &::after {
    content: '';
    height: 3px;
    width: 200px;
    background-color: ${({ theme }) => theme.colors.color};
    display: block;
    margin: 10px auto;
  }
`;

export const Container = styled.div<AllContainerProps>`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.body};
  height: 100px;

  ${props =>
    props.window &&
    css`
      width: 100%;
    `}
`;

export const TabContent = styled.div<TabContentProps>`
  width: 10%;
  color: ${({ theme }) => theme.colors.color};

  margin: 45px 0 0 50px;
  border: 2px solid ${({ theme }) => theme.colors.color};
  border-radius: 10px;

  ${props =>
    props.selected &&
    css`
      background: ${({ theme }) => theme.colors.color};
      color: #fff;
    `}

  ${props =>
    props.window &&
    css`
      width: 35%;
      height: 50px;
      margin: 10px;
    `}

  display: flex;
  flex-direction: row;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.color};
    transition: 0.7s;
    color: #fff;
  }
`;

export const TabText = styled.p`
  margin: auto;
  font-weight: bold;
  font-size: 18px;
`;

export const ContainerPage = styled.div``;

export const CardFluxContainer = styled.div<AllContainerProps>`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: auto;

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
  width: 50%;
  margin: 50px 0 100px 0;

  strong {
    text-align: center;
    font-weight: bold;
  }

  ${props =>
    props.window &&
    css`
      width: 100%;
      padding: 0 10px 0 30px;
      margin: 0;

      strong {
        font-size: 12px;
      }
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
  margin: auto;
  cursor: pointer;
`;

export const PeriodText = styled.div<AllContainerProps>`
  font-size: 18px;

  margin: 0 40px;

  ${props =>
    props.window &&
    css`
      font-size: 12px;
      margin: 0 5px 0 5px;
    `}
`;

export const ContentContainer = styled.div<AllContainerProps>`
  height: 45px;
  width: 90%;
  border-radius: 10px;
  margin: 10px 0 10px 0;
  padding: 3px;

  &:hover {
    background: ${({ theme }) => theme.colors.row};
    cursor: pointer;
  }
`;

export const Content = styled.div`
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
      width: 50%;
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

export const ContentCredits = styled.div`
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

export const InfosGeraisContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const InfosGerais = styled.div<AllContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: auto;

  border-radius: 5px;
  min-height: 200px;
  width: 40%;

  background: ${({ theme }) => `linear-gradient(
    90deg,
    ${theme.colors.body} 0%,
    rgba(100, 100, 100, 0.1) 50%,
    ${theme.colors.body} 100%
  )`};

  ${props =>
    props.window &&
    css`
      width: 80%;
    `}
`;

export const InfoText = styled.div<{ theme: ThemeType }>`
  text-align: center;
  color: ${({ theme }) => theme.colors.color};
  margin: 0;
  align-items: center;
  font-weight: bold;
`;

export const InfoSubText = styled.p<AllContainerProps>`
  text-align: center;
  margin: 5px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};

  ${props =>
    props.window &&
    css`
      font-size: 13px;
    `}
`;

export const CoordenadorText = styled.p<{ theme: ThemeType }>`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  width: 90%;
  margin: auto;

  strong {
    color: ${({ theme }) => theme.colors.color};
    font-weight: bold;
  }
`;

export const ContainerSubjects = styled.div<AllContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 20px;
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;

    &::after {
      content: '';
      height: 3px;
      width: 100px;
      background-color: ${({ theme }) => theme.colors.color};
      display: block;
      margin: 10px auto;
    }
  }
`;

export const Subject = styled.div<AllContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 80%;

  background: rgba(100, 100, 100, 0.1);
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px 30px;

  &:hover {
    background: rgba(100, 100, 100, 0.3);
    transform: translateX(10px);
  }

  ${props =>
    props.window &&
    css`
      padding: 5px 10px;
    `}

  .name {
    width: 100%;
    text-align: center;
    font-size: 16px;

    strong {
      font-weight: bold;
    }
  }

  .obr {
    font-size: 13px;
    font-weight: bold;
    color: #080;
    margin-left: 40px;
  }

  .opt {
    font-size: 13px;
    font-weight: bold;
    color: #f90;
    margin-left: 40px;
  }
`;

export const Form = styled.div<AllContainerProps>`
  margin-top: 60px;
  max-width: 700px;
  margin: 0 auto;
  padding: 25px 20px 15px 20px;

  display: flex;
  flex-direction: column;

  .results {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
      margin: 3px 3px 0 0;
      color: #a8a8b3;
    }
  }

  form {
    display: flex;
    margin-right: 10px;
    width: 500px;

    input {
      width: 100%;
      flex: 1;
      height: 40px;
      padding: 0 24px;
      border: 0;
      background: #f2f2f2;
      border-radius: 5px 0 0 5px;
      color: #3a3a3a;
    }
  }

  ${props =>
    props.window &&
    css`
      form {
        width: 100%;
        margin-bottom: 7px;

        input {
          width: 75%;
        }

        button {
          width: 25%;
        }
      }
    `}
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;

  min-width: 20%;
  padding: 40px 20px;
  margin-bottom: 20px;

  button {
    padding: 10px;
    margin: 0 10px;
    border-radius: 5px;
    border: 0;
    background: #27004d;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#27004d')};
    }
  }

  button[disabled] {
    opacity: 0.5;
    cursor: default;
  }
`;
