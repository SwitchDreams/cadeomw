import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

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

export const SubjectCardStyle = styled.div`
  min-width: 25%;
  margin: 70px 0px 30 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.h3``;
