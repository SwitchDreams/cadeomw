import React from 'react';
import { MenuItem, Select, Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import Header from '../../components/Header';
import { Subjects } from '../../services/timetable/example';
import Generator, { Class } from '../../services/timetable/generator';
import { SubjectChip, Form } from './styles';

const initialDate = '2020-09-20';

const subjects = Subjects;

function renderEventContent(eventInfo: any) {
  return (
    <>
      <i>{eventInfo.event.id}</i>
    </>
  );
}

function shiftToHour(shift: string) {
  switch (shift) {
    case 'T':
      return 12;
    case 'M':
      return 8;
    default:
      return 0;
  }
}

function timeToEvent(time: string, classRoom: Class) {
  const [week, shift, start, end] = time.split('');
  return {
    id: `${classRoom.name}-${classRoom.teacher}-${week}`,
    // Dia 20 é segunda feira, portanto somando com o número da semana, conseguimos a data correspondente
    start: `2020-09-${20 + parseInt(week, 10) - 1}T${String(
      shiftToHour(shift) + parseInt(start, 10) - 1,
    ).padStart(2, '0')}:00:00`,
    end: `2020-09-${20 + parseInt(week, 10) - 1}T${String(
      shiftToHour(shift) + parseInt(end, 10),
    ).padStart(2, '0')}:00:00`,
  };
}

function classToEvent(classRoom: Class) {
  const times = classRoom.time;
  const events: any = [];
  times.map((time: string) => events.push(timeToEvent(time, classRoom)));
  return events;
}

// Variáveis de tamanho para Multiple Select
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
  const [selectedSubjects, setSelectedSubjects] = React.useState<Array<string>>(
    [],
  );
  const [selectedClasses, setSelectedClasses] = React.useState<Array<any>>([]);

  function handleChange(event: any): void {
    setSelectedSubjects(event.target.value);
  }

  function handleGenerateTable(): void {
    const filter = subjects.filter(({ name }) =>
      selectedSubjects.includes(name),
    );
    const generator = new Generator(filter, []);
    generator.bestSubjectsClasses();
    const events: Array<any> = [];
    generator.selectedClasses.map(selectedClass =>
      classToEvent(selectedClass).map((event: any) => events.push(event)),
    );
    setSelectedClasses(events);
  }

  return (
    <>
      <div className="text-center">
        <Header transparent={false} />

        <Form>
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
                  <SubjectChip key={value} label={value} />
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

          <Button
            variant="outlined"
            color="primary"
            onClick={handleGenerateTable}
          >
            Montar Grade
          </Button>
        </Form>

        {selectedClasses.length !== 0 && (
          <FullCalendar
            plugins={[timeGridPlugin, dayGridPlugin]}
            initialView="timeGridWeek"
            weekText="ddd"
            eventConstraint={{
              start: '08:00:00',
              end: '22:00:00',
            }}
            initialDate={initialDate}
            allDaySlot={false}
            eventContent={renderEventContent}
            slotMinTime="08:00:00"
            slotMaxTime="22:00:00"
            slotDuration="1:00:00"
            slotLabelInterval={{ hours: 1 }}
            events={selectedClasses}
            dayHeaderFormat={{ weekday: 'short' }}
            headerToolbar={false}
          />
        )}
      </div>
    </>
  );
};

export default TimeTable;
