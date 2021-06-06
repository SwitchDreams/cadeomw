import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { CardWrapper } from './styles';
import Course from './courses';
import Subject from './subjects';
import Department from './department';

interface ListCardProps {
  id: number;
  name: string;
  num_semester?: number;
  shift?: string;
  initials?: string;
  departmentName?: string;
  code?: string | number;
  window: boolean;
  // Department, Subject or Course
  type: 'D' | 'S' | 'C';
}

const ListCard: React.FC<ListCardProps> = (props: ListCardProps) => {
  // eslint-disable-next-line consistent-return
  function renderBody(): any {
    if (props.type === 'D') {
      return <Department name={props.name} initials={props.initials} />;
    }
    if (props.type === 'S') {
      return (
        <Subject
          code={props.code}
          name={props.name}
          departmentName={props.departmentName}
        />
      );
    }
    if (props.type === 'C') {
      return (
        <Course
          name={props.name}
          shift={props.shift}
          num_semester={props.num_semester}
        />
      );
    }
  }

  function renderLink({ type, id }: { type: string; id: number }): string {
    switch (type) {
      case 'D':
        return `department/${id}`;
      case 'S':
        return `subjects/${id}`;
      case 'C':
        return `courses/${id}`;
      default:
        return '/';
    }
  }

  ListCard.defaultProps = {
    num_semester: 0,
    shift: '',
    initials: '',
    departmentName: '',
    code: undefined,
  };

  return (
    <CardWrapper window={props.window}>
      <Link className="list-card-link" key={props.id} to={renderLink(props)}>
        {renderBody()}
        <FiChevronRight size={20} />
      </Link>
    </CardWrapper>
  );
};

export default ListCard;
