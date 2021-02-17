import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  url: string = "http://localhost:3000/people"

  constructor(private http: HttpClient) { }

  getPeople(){
    return this.http.get(this.url)
  }

  addPeople(people: People){
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(people)
    return this.http.post(this.url, body, {'headers': headers})
  }

  updatePeople(people: People){
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(people)
    return this.http.put(this.url + "/" + people.id, body, {'headers': headers})
  }

  deletePeople(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
}
