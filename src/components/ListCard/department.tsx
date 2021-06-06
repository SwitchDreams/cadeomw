import React from 'react'

interface DepartmentProps {
    name: string;
    initials: string | undefined;
}

const Department: React.FC<DepartmentProps> = ({name, initials}) => {
    return (
        <div>
            <strong>
                {name.charAt(0).toUpperCase() +
                    name.slice(1).toLowerCase()}
            </strong>
            <p>
                Sigla:
                  {` ${initials}`}
            </p>
        </div>
    )
}

export default Department;