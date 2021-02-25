import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url: string = "http://localhost:3001/api/student"

  constructor(private http: HttpClient) { 
  }

  getStudents(){
    return this.http.get(this.url)
  }

  addStudent(student: any){
    const headers = {"content-type": "application/json"}
    const body = JSON.stringify(student)
    return this.http.post(this.url, body, {headers})
  }
}
