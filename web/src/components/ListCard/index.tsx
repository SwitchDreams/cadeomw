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

const ListCard: React.FC<ListCardProps> = ({
  id,
  name,
  num_semester,
  shift,
  initials,
  departmentName,
  code,
  window,
  type,
}: ListCardProps) => {
  // eslint-disable-next-line consistent-return
  function renderBody(): any {
    if (type === 'D') {
      return <Department name={name} initials={initials} />;
    }
    if (type === 'S') {
      return (
        <Subject code={code} name={name} departmentName={departmentName} />
      );
    }
    if (type === 'C') {
      return <Course name={name} shift={shift} num_semester={num_semester} />;
    }
  }

  function renderLink({
    ty,
    ide,
  }: {
    ty: 'D' | 'S' | 'C';
    ide: number;
  }): string {
    switch (ty) {
      case 'D':
        return `department/${ide}`;
      case 'S':
        return `subjects/${ide}`;
      case 'C':
        return `courses/${ide}`;
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
    <CardWrapper window={window}>
      <Link
        className="list-card-link"
        key={id}
        to={renderLink({ ty: type, ide: id })}
      >
        {renderBody()}
        <FiChevronRight size={20} />
      </Link>
    </CardWrapper>
  );
};

export default ListCard;
