import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import AssessmentIcon from '@material-ui/icons/Assessment';
import List from '@material-ui/core/List';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { SubjectCardStyle, CardTitle, useStylesCard } from './styles';

import { Materias } from '../../pages/Course';

interface SubjectsProps {
  subject: Materias;
  title: string;
}

const HardestEasiest: React.FC<SubjectsProps> = ({
  subject,
  title,
}: SubjectsProps) => {
  const classesCard = useStylesCard();

  return (
    <SubjectCardStyle>
      <Card elevation={7} className={classesCard.bullet}>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <Divider />
          <List component="nav" aria-label="main mailbox folders">
            <ListItem>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary={subject.subject_name} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText
                primary={`Porcentagem de aprovação: ${
                  subject.pass_percent * 100
                }%`}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary={subject.status} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CollectionsBookmarkIcon />
              </ListItemIcon>
              <ListItemText primary={`${subject.credit} créditos`} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </SubjectCardStyle>
  );
};

export default HardestEasiest;
