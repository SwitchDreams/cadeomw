import Chip from '@material-ui/core/Chip';
import { FormControl } from '@material-ui/core';
import styled, { css } from 'styled-components';

interface WindowProps {
  window: boolean;
}

export const SubjectChip = styled(Chip)`
  margin: 2px;
`;

export const Form = styled(FormControl)`
  width: 250px;
`;

export const CalendarContainer = styled.div<WindowProps>`
  max-width: 80%;
  margin: auto;
  padding-top: 50px;
  .fc .fc-timegrid-slots td {
    height: 2.5em !important;
  }

  ${props =>
    props.window &&
    css`
      overflow-x: scroll;

      .fc-view {
        overflow-x: scroll;
      }
      .fc-view > table {
        width: 600px;
      }
    `}
`;

export const SlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .title {
    font-weight: bold;
    font-size: 16px;

    hr {
      width: 70%;
      background-color: white;
      margin: auto;
    }
  }

  .info {
    margin-top: 5px;
  }
`;

export const ListSubjects = styled.div<WindowProps>`
  margin-top: 5vh;
  width: 100%;

  .subjectShow {
    width: 40%;
    margin: auto;

    display: flex;
    flex-direction: row;
    align-items: center;

    ${props =>
      props.window &&
      css`
        font-size: 12px;
        width: 90%;
      `}
  }
`;

export const SubjectCard = styled.div<WindowProps>`
  border-radius: 20px;
  box-shadow: 2px 2px 10px #333;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px 0 25px;
  height: 7vh;
  margin-bottom: 10px;

  h3 {
    font-size: 16px;
    color: #333;
    font-weight: bold;
    text-align: left;

    &::after {
      content: '';
      height: 3px;
      width: 200px;
      background-color: #7c4fe0;
      display: block;
      margin-top: 5px;
    }
  }

  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  ${props =>
    props.window &&
    css`
      h3 {
        font-size: 12px;
        &::after {
          content: '';
          height: 2px;
          width: 100px;
        }
      }
    `}
`;

export const ModalSubjectsContainer = styled.div`
  #title {
    font-size: 24px;
    text-transform: initial;
    text-align: center;
  }

  ul {
    list-style-type: none;
    li {
      display: flex;
      flex-direction: row;
      margin-bottom: 15px;
      padding: 0;
      justify-content: space-between;
      border-bottom: 1px solid #7c4fe0;
      font-size: 14px;

      span.bold {
        text-transform: uppercase;
        font-weight: bold;
      }

      span.grey {
        color: #555;
      }
    }
  }
`;

export const MontarGrade = styled.div`
  margin: 30px;
`;

export const HowToUse = styled.div<WindowProps>`
  text-align: center;
  color: #222;
  max-width: 70%;
  margin: auto;

  h3 {
    font-size: 40px;
    font-weight: bold;
    text-transform: initial;

    &::after {
      content: '';
      height: 3px;
      width: 200px;
      background-color: #7c4fe0;
      display: block;
      margin: 10px auto;
    }
  }

  p {
    margin: 40px;
  }

  ${props =>
    props.window &&
    css`
      max-width: 100%;
    `}
`;
