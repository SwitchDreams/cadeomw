import React, { useEffect, useState } from 'react';
import { MenuItem, Select, Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import Header from '../../components/Header';
import { Subjects } from '../../services/timetable/example';
import Generator from '../../services/timetable/generator';
import { SubjectChip, Form, CalendarContainer, SlotContainer } from './styles';
import { classToEvent, randomColor } from './utils';

const initialDate = '2020-09-20';

function renderEventContent(eventInfo: any) {
  const [subjectName, className, teacher, place] = eventInfo.event.id.split(
    '-',
  ) as string[];
  return (
    <>
      <SlotContainer>
        <div className="title">
          {subjectName} - {className}
          <hr />
        </div>
        <div className="info">
          {teacher} <br />
          {place}
        </div>
      </SlotContainer>
    </>
  );
}

const subjects = Subjects;

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
  const [selectedSubjects, setSelectedSubjects] = useState<Array<string>>([]);
  const [selectedClasses, setSelectedClasses] = useState<Array<any>>([]);
  const [windowCheck, setWindowCheck] = useState(false);

  function handleChange(event: any): void {
    setSelectedSubjects(event.target.value);
  }

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setWindowCheck(true);
    }
  }, []);

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1000) {
      setWindowCheck(true);
    } else {
      setWindowCheck(false);
    }
  });

  function handleGenerateTable(): void {
    const filteredSubjects = subjects
      .map(subject => {
        const randColor = randomColor();
        return {
          classes: subject.classes.map(schoolClass => {
            return {
              ...schoolClass,
              color: randColor,
              subjectName: subject.name,
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
          <CalendarContainer window={windowCheck}>
            <FullCalendar
              plugins={[timeGridPlugin, dayGridPlugin]}
              initialView="timeGridWeek"
              weekText="ddd"
              height="auto"
              weekends={false}
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
