import { Injectable } from '@angular/core';
import { Student } from './student.model';
@Injectable()
export class StudentService{
    sarr=[new Student(101,'shraddha',80,89,90),new Student(102,'vaishnavi',50,80,59),new Student(103,'komal',83,80,90)];

    getAllStudents():Student[]
    {
        return this.sarr;

    }

}
