import React from 'react';
import { MenuItem, Select, Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import Header from '../../components/Header';
import { Subjects } from '../../services/timetable/example';
import Generator, { GeneratorClass } from '../../services/timetable/generator';
import { SubjectChip, Form, CalendarContainer } from './styles';

const initialDate = '2020-09-20';

const subjects = Subjects;

function renderEventContent(eventInfo: any) {
  return (
    <>
      <i>{eventInfo.event.id} teste</i>
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

function randomColor() {
  return '#000000'.replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
}

function timeToEvent(time: string, classRoom: GeneratorClass) {
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
    color: classRoom.color,
  };
}

function classToEvent(classRoom: GeneratorClass): any[] {
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
    const filteredSubjects = subjects
      .map(subject => {
        const randColor = randomColor();
        return {
          classes: subject.classes.map(schoolClass => {
            return {
              ...schoolClass,
              color: randColor,
            };
          }),
          color: randColor,
          name: subject.name,
        };
      })
      .filter(({ name }) => {
        return selectedSubjects.includes(name);
      });
    const generator = new Generator(filteredSubjects, []);
    generator.bestSubjectsClasses();
    const formattedEvents: any[] = [];
    generator.selectedClasses.forEach(selectedClass => {
      classToEvent(selectedClass).forEach(formattedEvent =>
        formattedEvents.push(formattedEvent),
      );
    });
    setSelectedClasses(formattedEvents);
    const a = 10;
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
          <CalendarContainer>
            <FullCalendar
              plugins={[timeGridPlugin, dayGridPlugin]}
              initialView="timeGridWeek"
              weekText="ddd"
              height="auto"
              aspectRatio={1}
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
          </CalendarContainer>
        )}
      </div>
    </>
  );
};

export default TimeTable;
