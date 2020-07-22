import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PersonIcon from '@material-ui/icons/Person';
import List from '@material-ui/core/List';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../../components/Header';

import { Container, TabContainer, TabText, InfoContainer } from './styles';

import Course from './index'

/*
  Página do curso - Bruna e Japa
*/

const useStyles = makeStyles({
  root: {
    mixWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const InformationCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Card elevation={7} className={classes.bullet}>
      <CardContent>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <CollectionsBookmarkIcon />
            </ListItemIcon>
            <ListItemText primary="Créditos: 256" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccessTimeIcon />
            </ListItemIcon>
            <ListItemText primary="Permanencia minima: 8 semestres" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccessTimeIcon />
            </ListItemIcon>
            <ListItemText primary="Permanencia máxima: 18 semestres " />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

const EstatisticsCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Card elevation={7} className={classes.bullet}>
      <CardContent>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="vazão: 100%" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccessTimeIcon />
            </ListItemIcon>
            <ListItemText primary="Permanencia média: 10 anos" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Quantidade de alunos ativos: 32 " />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Quantidade média de créditos/periodo: 24 " />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};





const Info: React.FC = () => {
  return (
    <>
      <Course/>
      <InfoContainer>
        <InformationCard />
        <EstatisticsCard />
      </InfoContainer>
    </>
  );
};

export default Info;
