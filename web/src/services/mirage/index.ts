import { Server } from 'miragejs';
import { CourseData, ListCourseData } from './data/course';
import { DepartmentData, ListDepartmentData } from './data/department';
import { ListSubjectData, SubjectData } from './data/subject';

export default function (): Server {
  return new Server({
    routes() {
      this.urlPrefix = 'https://back.cadeomw.com.br';

      // Courses
      this.get('/courses', () => ListCourseData);

      this.get(
        '/courses/:id',
        (_, request) => {
          const { id } = request.params;

          return CourseData(id);
        },
        { timing: 500 },
      );

      // Departments
      this.get('/department', () => ListDepartmentData);

      this.get('/department/:department_id', () => DepartmentData);

      // Subjects
      this.get('/subjects', () => ListSubjectData);

      this.get(
        '/subjects/:subject_id',
        (_, request) => {
          const { subject_id } = request.params;

          return SubjectData(subject_id);
        },
        { timing: 500 },
      );
    },
  });
}
