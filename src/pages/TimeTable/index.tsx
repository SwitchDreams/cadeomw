import React from 'react';
import { FormControl, MenuItem, Select, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip';
import Header from '../../components/Header';
import { Subjects } from '../../services/timetable/example';

const subjects = Subjects;

const useStyles = makeStyles((theme: any) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const TimeTable: React.FC = () => {
  const [selectedSubjects, setSelectedSubjects] = React.useState([]);
  const classes = useStyles();

  function handleChange(event: any): void {
    setSelectedSubjects(event.target.value);
  }

  return (
    <>
      <div>
        <Header transparent={false} />

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-chip-label">
            Escolha suas matérias
          </InputLabel>

          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={selectedSubjects}
            onChange={handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected: any) => (
              <div>
                {selected.map((value: string) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {subjects.map(subject => (
              <MenuItem key={subject.name} value={subject.name}>
                {subject.name}
              </MenuItem>
            ))}
          </Select>

          <Button variant="outlined" color="primary">
            Montar Grade
          </Button>
        </FormControl>
      </div>
    </>
  );
};

export default TimeTable;
