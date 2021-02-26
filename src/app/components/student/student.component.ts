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
  id!: any
  name!: string;
  email!: string
  city!: string
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents()
  }

  getStudents(){
    this.studentService.getStudents().subscribe(
      response => {
      this.students = response as any
      },
      error => {
        console.log(error)
        console.log(error.ok)
        console.log(error.status)
        console.log(error.statusText)
        console.log(error.message)
      }
    )
  }

  addStudent(){
    let student = {Name: this.name, Email: this.email, City: this.city}
    this.studentService.addStudent(student).subscribe(response => {
      this.getStudents()
      this.clearData();
    })
  }

  editStudent(studentId:number){
    this.studentService.getStudentById(studentId).subscribe(response =>{
      let data:any = response
      this.id = data[0].Id
      this.name = data[0].Name
      this.email = data[0].Email
      this.city = data[0].City
    })
  }

  updateStudent(){
    let student = {Name: this.name, Email: this.email, City: this.city}
    this.studentService.updateStudent(this.id, student).subscribe(response =>{
      this.clearData();
      this.getStudents()
    })
  }

  deleteStudent(studentId:number){
    this.studentService.deleteStudent(studentId).subscribe(response => {
      this.getStudents()
    })
  }

  clearData(){
    this.id = ''
    this.name = ''
    this.email = ''
    this.city = ''
  }
}
