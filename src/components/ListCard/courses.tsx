import React from 'react'

interface CourseProps {
    name: string;
    shift: string | undefined;
    num_semester: number | undefined;
}

const Course: React.FC<CourseProps> = ({ name, shift, num_semester }) => {
    return (
        <div>
            <strong>
                {name.charAt(0).toUpperCase() +
                    name.slice(1).toLowerCase()}
            </strong>
            <p>{shift}</p>
            <p>Quantidade de períodos: {num_semester}</p>
        </div>
    )
}

export default Course;