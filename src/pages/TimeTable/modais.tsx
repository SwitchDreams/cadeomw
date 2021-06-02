import React from 'react';
import {Modal, Row, Col} from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import {FaCheck} from 'react-icons/fa';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import {
  ModalSubjectsContainer,
  ModalBusyHoursContainer,
  TitleRow,
} from './styles';
import {hours, ModalSubject, Subject, checkboxes} from './utils';
import {parseHorario} from '../../utils/parseOferta'

interface ModaisProps {
  modalSubjects: ModalSubject[];
  subjectsSearched: Subject[];
  show: boolean;
  show2: boolean;
  windowCheck: boolean;
  handleAddModalSubject: any;
  handleChangeCheckbox: any;
  checked: typeof checkboxes;
  hide1: any;
  hide2: any;
}

export const Modais: React.FC<ModaisProps> = ({
                                                modalSubjects,
                                                subjectsSearched,
                                                show,
                                                show2,
                                                windowCheck,
                                                handleAddModalSubject,
                                                handleChangeCheckbox,
                                                checked,
                                                hide1,
                                                hide2,
                                              }: ModaisProps) => {
  let hourCounter = -6;

  return (
    <>
      <Modal
        show={show}
        onHide={hide1}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <ModalSubjectsContainer>
          <Modal.Header closeButton>
            <Modal.Title id="title">
              Selecione as disciplinas que deseja adicionar à sua grade
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalSubjects.map(subject => (
              <>
                <TitleRow className="align-middle justify-content-center">
                  <Col sm={10}>
                    <span className="bold">{subject.name} </span>
                    <span className="grey"> {subject.code}</span>
                    <span>
                      {subjectsSearched.find(
                        subj => subj.code === subject.code,
                      ) && (
                        <FaCheck
                          style={{
                            marginLeft: '10px',
                            color: '#5cb85c',
                            fontSize: windowCheck ? 20 : '1vw',
                          }}
                        />
                      )}
                    </span>
                  </Col>
                  <Col sm={2}>
                    <IconButton
                      aria-label="add"
                      style={{
                        marginLeft: '0.9vw',
                        marginBottom: '0.8vh',
                      }}
                      onClick={() => handleAddModalSubject(subject)}
                    >
                      <AddIcon
                        style={{
                          fontSize: windowCheck ? 20 : '1.5vw',
                          color: '#4e3388',
                        }}
                      />
                    </IconButton>
                  </Col>
                </TitleRow>
                {subject.offer.map(offer => {
                  return (
                    <>
                      <Row className="align-items-center">
                        <ul>
                          {offer.schedule.map(item => {
                            if (item) {
                              if (item.indexOf('\n') !== -1) {
                                return (
                                  <h5 style={{color: 'black'}}>
                                    Não há horário
                                  </h5>
                                );
                              }
                              return (
                                <li style={{color: 'black'}}>
                                  {parseHorario(item)}
                                </li>
                              );
                            }
                            return null;
                          })}
                        </ul>
                      </Row>
                      <Divider/>
                    </>
                  );
                })}
              </>
            ))}
          </Modal.Body>
          <Modal.Footer>
            Não encontrou sua disciplina? Tente pesquisar de outra forma!
          </Modal.Footer>
        </ModalSubjectsContainer>
      </Modal>

      <Modal
        show={show2}
        onHide={hide2}
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
    </>
  );
};
