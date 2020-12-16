import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { MenuItem, Select, Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import TextField from '@material-ui/core/TextField';

import { useToast } from '../../hooks/toasts';
import api from '../../services/api';

import Header from '../../components/Header';
import { Subjects } from '../../services/timetable/example';
import Generator from '../../services/timetable/generator';
import { SubjectChip, Form, CalendarContainer, SlotContainer } from './styles';
import { classToEvent, randomColor } from './utils';

interface SubjectInfos {
  results: Results[];
  next: string;
  previous: string;
  count: number;
}

interface Results {
  code: number;
  department: string;
  credit: number;
  name: string;
}

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
  const [search, setSearch] = useState('');
  const [subjectsSearched, setSubjectsSearched] = useState<SubjectInfos[]>();

  const { addToast } = useToast();

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

  async function handleInputSearch(event: any): Promise<void> {
    event.preventDefault();
    try {
      const response = await api.get<SubjectInfos>(
        `subjects/?search=${search}&format=json`,
      );
      console.log(response.data);
      // setSubjectsSearched(response.data);
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Falha na pesquisa',
        description: 'Tente novamente mais tarde',
      });
    }
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
          <TextField
            id="filled-basic"
            variant="filled"
            label="Pesquise as disciplinas"
            onChange={e => setSearch(e.target.value)}
          />
          <Button
            variant="outlined"
            color="primary"
            onClick={handleInputSearch}
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
