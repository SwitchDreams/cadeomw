import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import DeleteIcon from '@material-ui/icons/Delete';
import { Form as BootForm } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';

import {
  CalendarContainer,
  HowToUse,
  NoCalendarMessage,
  SlotContainer,
  ListSubjects,
  SubjectCard,
} from './styles';
import { Subject } from './utils';

interface HowUseProps {
  window: boolean;
}

interface FullcalendarProps {
  selectedClasses: any[];
  window: boolean;
  tryGenerate: boolean;
}

interface ListsubjectsProps {
  subjectsSearched: Subject[];
  window: boolean;
  handleChangeClass: any;
  handleDeleteSubject: any;
}

export const initialDate = '2020-09-20';

export function renderEventContent(eventInfo: any) {
  const [subjectName, className, teacher] = eventInfo.event.id.split(
    '-',
  ) as string[];
  const windowCheck = window.innerWidth <= 1000;

  return (
    <>
      <SlotContainer window={windowCheck}>
        <div className="title">
          {subjectName[0]}
          {subjectName.slice(1).toLowerCase()} - {className}
          <hr />
        </div>
        <div className="info">{teacher}</div>
      </SlotContainer>
    </>
  );
}

export const Fullcalendar: React.FC<FullcalendarProps> = ({
  selectedClasses,
  window,
  tryGenerate,
}: FullcalendarProps) => (
  <>
    {selectedClasses.length !== 0 && (
      <CalendarContainer window={window}>
        <FullCalendar
          plugins={[timeGridPlugin, dayGridPlugin]}
          initialView="timeGridWeek"
          weekText="ddd"
          height="auto"
          aspectRatio={1}
          eventConstraint={{
            start: '08:00:00',
            end: '24:00:00',
          }}
          initialDate={initialDate}
          allDaySlot={false}
          eventContent={renderEventContent}
          slotMinTime="08:00:00"
          slotMaxTime="24:00:00"
          slotDuration="1:00:00"
          slotLabelInterval={{ hours: 1 }}
          events={selectedClasses}
          dayHeaderFormat={{ weekday: 'short' }}
          headerToolbar={false}
        />
      </CalendarContainer>
    )}
    {selectedClasses.length === 0 && tryGenerate && (
      <NoCalendarMessage>
        Não foi possível criar uma grade horária com as disciplinas e horários
        selecionados, tente uma nova combinação.
      </NoCalendarMessage>
    )}
  </>
);

export const Listsubjects: React.FC<ListsubjectsProps> = ({
  subjectsSearched,
  window,
  handleChangeClass,
  handleDeleteSubject,
}: ListsubjectsProps) => (
  <>
    {subjectsSearched && (
      <ListSubjects window={window}>
        {subjectsSearched.map(subj => (
          <div key={subj.name} className="subjectShow">
            <SubjectCard window={window}>
              <h3>{subj.name}</h3>
              <div className="left">
                <BootForm.Group controlId="exampleForm.ControlSelect1">
                  <BootForm.Control
                    as="select"
                    onChange={e =>
                      handleChangeClass({
                        class: e.target.value,
                        subj,
                      })
                    }
                  >
                    <option>turma</option>
                    {subj.offer.map(offer => (
                      <option key={offer.name}>{offer.name}</option>
                    ))}
                  </BootForm.Control>
                </BootForm.Group>
                <IconButton
                  aria-label="delete"
                  style={{
                    marginLeft: window ? 0 : '0.9vw',
                    marginBottom: '0.8vh',
                  }}
                  onClick={() => handleDeleteSubject(subj)}
                >
                  <DeleteIcon
                    style={{
                      fontSize: window ? 20 : '1.5vw',
                      color: '#4e3388',
                    }}
                  />
                </IconButton>
              </div>
            </SubjectCard>
          </div>
        ))}
      </ListSubjects>
    )}
  </>
);

export const HowUse: React.FC<HowUseProps> = ({ window }: HowUseProps) => (
  <HowToUse window={window}>
    <h3>Gerador de Grade Automática</h3>
    <p>
      Finalmente chegou o nosso tão esperado, xuxuzinho, gerador de grade
      automática! <br /> E para facilitar seu uso, preparamos um pequeno passo a
      passo para vocês.
    </p>
    <p>
      Primeiro, clique para adicionar seu horário ocupado, e marque os horários
      em que não deseja ter aulas, ou que já tenha outras atividades.
      <br /> Depois, basta pesquisar o nome da matéria que deseja adicionar na
      sua grade, nós mostraremos uma série de possibilidades que são compatíveis
      com a sua pesquisa, portanto tente ser específico. Depois de adicionada a
      disciplina em sua lista, você pode ou não especificar a turma na qual
      deseja cursar. Caso não especificada, nós pegaremos a turma que melhor se
      encaixa nos seus horários.
    </p>
    <p>
      Caso alguma turma ou disciplina especificada tenha conflito de horário com
      outra, ou com seu horário ocupado, uma das duas matérias não irá ser
      adicionada à sua grade. <br /> As cores da grade são geradas
      aleatoriamente, caso deseje alterá-las, basta clicar em montar grade
      novamente.
    </p>
  </HowToUse>
);
