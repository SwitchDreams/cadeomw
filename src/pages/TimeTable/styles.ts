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
