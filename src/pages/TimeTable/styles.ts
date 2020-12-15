import Chip from '@material-ui/core/Chip';
import { FormControl } from '@material-ui/core';
import styled from 'styled-components';

export const SubjectChip = styled(Chip)`
  margin: 2px;
`;

export const Form = styled(FormControl)`
  width: 250px;
`;

export const CalendarContainer = styled.div`
  max-width: 80%;
  margin: auto;
  .fc .fc-timegrid-slots td {
    height: 2.5em !important;
  }
`;
