import React from 'react';
import { Container, Courses, Form } from './styles';
import { FiChevronRight } from 'react-icons/fi';

/*
  Página de listagem de cursos - Waliff
*/

import Header from '../../components/Header';

const ListCourses: React.FC = () => {
  return (
    <>
      <Header />
      
      <Form>
        <input placeholder="Digite o nome do curso"></input>  
        <button type="submit">Pesquisar</button>
      </Form>

      <Courses>
        <a href="teste">
          <div>
            <strong> Nome do Curso</strong>
            <p>Código</p>
            <p>Número de Períodos</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <div>
            <strong> Nome do Curso</strong>
            <p>Código</p>
            <p>Número de Períodos</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <div>
            <strong> Nome do Curso</strong>
            <p>Código</p>
            <p>Número de Períodos</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        
      </Courses>
    </>
  );
};

export default ListCourses;
