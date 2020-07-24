import React, { Component } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { apiCourses } from '../../services/api'
import { Container, Courses, Form } from './styles';

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

        <div className="actions">
          <button>Anterior</button>
          <button>Próximo</button>
        </div>
        
      </Courses>
    </>
  );
};

export default ListCourses;
