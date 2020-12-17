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

export const ListSubjects = styled.div`
  margin-top: 5vh;
  width: 100%;

  .subjectShow {
    width: 35%;
    margin: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const SubjectCard = styled.div`
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
`;

export const ModalSubjectsContainer = styled.div`
  ul {
    list-style-type: none;
    li {
    }
  }
`;
