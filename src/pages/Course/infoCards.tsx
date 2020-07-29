import React from 'react';

import Card from '@material-ui/core/Card';
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

import { useStylesCard } from './styles';

const InfoCards: React.FC = () => {
  const classes = useStylesCard();
  return (
    <>
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
    </>
  );
};



export default InfoCards;
