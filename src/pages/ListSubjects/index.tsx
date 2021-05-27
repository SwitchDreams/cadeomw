import React, { useCallback, useEffect, useState } from 'react';
import Axios from 'axios';
import { FiChevronRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Select from 'react-dropdown-select';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import { Modal } from 'react-bootstrap';
import api from '../../services/api';
import { useToast } from '../../hooks/toasts';
import {
  Subjects,
  Form,
  QtdSearch,
  SelectContainer,
  ButtonContainer,
  InstructionContainer,
} from './styles';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import departments from './departments';
import { checkboxes, hours } from '../TimeTable/utils';
import { ModalBusyHoursContainer } from '../TimeTable/styles';

interface Results {
  code: number;
  department_name: string;
  credit: number;
  name: string;
  offer: {
    name: string;
    semester: string;
    teachers: string[];
    total_vacancies: string;
    schedule: string[];
    place: string;
  }[];
}

interface SubjectInfos {
  results: Results[];
  next: string;
  previous: string;
  count: number;
}

function processSelectedSchedules(selectedSchedules: typeof checkboxes) {
  let listSelectedSchedules = '';
  for (let i = 0; i < selectedSchedules.length; i += 1) {
    if (selectedSchedules[i].checked) {
      listSelectedSchedules += `${selectedSchedules[i].name} `;
    }
  }
  return listSelectedSchedules.slice(0, -1);
}

const ListSubjects: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [qtdResults, setQtdResults] = useState(false);
  const [searchSubject, setSearchSubject] = useState('');
  const [searchDepartment, setSearchDepartment] = useState('');
  const [subjects, setSubjects] = useState<SubjectInfos>({
    results: [],
    next: '',
    previous: '',
    count: 0,
  });
  const { addToast } = useToast();
  const [WindowCheck, setWindowCheck] = useState(false);
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(checkboxes);
  const [busyHourSelected, setBusyHourSelected] = useState(false);
  let hourCounter = -6;

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

  useEffect(() => {
    const getSubjects = async () => {
      setLoading(true);
      try {
        const response = await api.get<SubjectInfos>(
          `subjects/?format=json&has_offer=true`,
        );

        setSubjects(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        addToast({
          type: 'error',
          title: 'Erro ao carregar as disciplinas',
          description: 'Tente novamente mais tarde',
        });
        history.push('/');
      }
    };

    getSubjects();
  }, [addToast, history]);

  async function handlePagination(pag: string) {
    if (pag !== null) {
      setLoading(true);
      try {
        const route = `${pag.slice(0, 4)}s${pag.slice(4)}`;
        const response = await Axios.get<SubjectInfos>(`${route}`);
        setSubjects(response.data);
        setLoading(false);
        window.scrollTo(0, 0);
      } catch (err) {
        setLoading(false);
        addToast({
          type: 'error',
          title: 'Erro ao acessar novas páginas',
          description: 'Tente novamente mai CalendarContainer, tarde',
        });
      }
    }
  }

  const handleSearchSubject = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get<SubjectInfos>(
        `subjects/?search=${searchSubject}&department_initial=${searchDepartment}&selected_schedules=${processSelectedSchedules(
          checked,
        )}&format=json&has_offer=true`,
      );
      console.log(response.data);
      setSubjects(response.data);
      setQtdResults(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      addToast({
        type: 'error',
        title: 'Falha na pesquisa',
        description: 'Tente novamente mais tarde',
      });
    }
    setSearchSubject('');
  }, [addToast, searchDepartment, searchSubject, checked]);

  useEffect(() => {
    handleSearchSubject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeCheckbox = useCallback(
    (name: string) => {
      const checkedNewState = checked.map(state => {
        if (state.name === name) return { name, checked: !state.checked };
        return state;
      });
      setChecked(checkedNewState);
      setBusyHourSelected(true);
    },
    [checked],
  );

  return (
    <>
      <Header transparent={false} />

      <Form window={WindowCheck}>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSearchSubject();
          }}
        >
          <input
            value={searchSubject}
            onChange={e => setSearchSubject(e.target.value)}
            placeholder="Digite o nome da disciplina"
          />

          <button type="submit">Pesquisar</button>
        </form>
      </Form>

      <SelectContainer>
        <Select
          options={departments}
          values={[departments[0]]}
          labelField="name"
          valueField="initials"
          noDataLabel="Departamento não encontrado"
          placeholder="Selecione o departamento"
          addPlaceholder="Filtre por departamento"
          searchable
          searchBy="name"
          clearable={false}
          multi={false}
          onChange={value => {
            setSearchDepartment(value[0].initials);
          }}
        />
      </SelectContainer>

      <ButtonContainer>
        <Button
          className="button"
          variant="outlined"
          color="primary"
          onClick={() => setShow(true)}
        >
          {busyHourSelected ? 'Horário Adicionado!' : 'Adicionar Horário'}
        </Button>
      </ButtonContainer>

      {loading && <Loading />}

      {qtdResults && !loading && (
        <QtdSearch>
          <div className="text-container">
            <p>Foram encontrados {subjects.count} resultados</p>
          </div>
        </QtdSearch>
      )}
      {!loading && (
        <Subjects window={WindowCheck}>
          {subjects.results.map(subject => (
            <a key={subject.code} href={`subjects/${subject.code}`}>
              <div>
                <strong>
                  {subject.name.charAt(0).toUpperCase() +
                    subject.name.slice(1).toLowerCase()}
                </strong>
                <p>Código: {subject.code}</p>
                <p>Departamento: {subject.department_name}</p>
              </div>
              <FiChevronRight size={20} />
            </a>
          ))}

          {!loading && (
            <div className="actions">
              <button
                type="button"
                disabled={subjects.previous == null}
                onClick={() => handlePagination(subjects.previous)}
              >
                Anterior
              </button>
              <button
                type="button"
                disabled={subjects.next == null}
                onClick={() => handlePagination(subjects.next)}
              >
                Próximo
              </button>
            </div>
          )}

          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            centered
          >
            <ModalBusyHoursContainer>
              <Modal.Header closeButton>
                <Modal.Title id="title">
                  Selecione os horários em que não deseja ter aulas
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <InstructionContainer>
                  <p>
                    Selecione o horário das aulas que voce procura, por exemplo:
                  </p>
                  <ul>
                    <li>segunda e quarta aula de 8 as 10</li>
                    <li>selecione nas colunas de segunda e quarta</li>
                    <li>os quadros 8:00 e 9:00 ou apenas 8:00</li>
                  </ul>
                </InstructionContainer>
                <table>
                  <thead>
                    <tr>
                      <th>Horários</th>
                      <th>Segunda</th>
                      <th>Terça</th>
                      <th>Quarta</th>
                      <th>Quinta</th>
                      <th>Sexta</th>
                      <th>Sábado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hours.map(hour => {
                      hourCounter += 6;
                      return (
                        <tr key={hour}>
                          <td>{hour}</td>
                          {checked
                            .slice(hourCounter, hourCounter + 6)
                            .map(checkbox => (
                              <td key={checkbox.name}>
                                <Checkbox
                                  color="default"
                                  onChange={() =>
                                    handleChangeCheckbox(checkbox.name)
                                  }
                                  inputProps={{
                                    'aria-label': 'checkbox with default color',
                                  }}
                                  checked={checkbox.checked}
                                />
                              </td>
                            ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Modal.Body>
            </ModalBusyHoursContainer>
          </Modal>
        </Subjects>
      )}
    </>
  );
};

export default ListSubjects;
