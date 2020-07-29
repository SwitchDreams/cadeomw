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

export const FeaturesContainer = styled.div`
  margin: 100px 0;

  display: flex;
  justify-content: center;

  .container {
    max-width: 70%;
  }

  div.MuiGrid-root {
    display: flex;
    justify-content: center;
  }
`;
