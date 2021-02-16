import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(){
    return this.http.get("http://localhost:3000/people")
  }

  addPeople(){
    
  }
}
