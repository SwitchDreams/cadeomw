import React from 'react';

interface SubjectProps {
  name: string;
  code: string | number | undefined;
  departmentName: string | undefined;
}

const Subject: React.FC<SubjectProps> = ({ name, code, departmentName }) => {
  return (
    <div>
      <strong>
        {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
      </strong>
      <p>Código: {code}</p>
      <p>Departamento: {departmentName}</p>
    </div>
  );
};

export default Subject;
