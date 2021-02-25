import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students!: Student[];
  name!: string;
  email!: string
  city!: string
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents()
  }

  getStudents(){
    this.studentService.getStudents().subscribe(response => {
      this.students = response as any
    })
  }

  addStudent(){
    let student = {Name: this.name, Email: this.email, City: this.city}
    console.log(student)
    this.studentService.addStudent(student).subscribe(response => {
      console.log(response)
      this.getStudents()
      this.clearData();
    })
  }

  clearData(){
    this.name = ''
    this.email = ''
    this.city = ''
  }

}
