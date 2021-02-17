import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people!: People[]
  id!: number;
  name!: string;
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeople();
  }
  getPeople(){
    this.peopleService.getPeople().subscribe(response => {
      this.people = response as any
     })
  }
  addPeople(){
    let people = this.createPeopleObject();
    this.peopleService.addPeople(people).subscribe(response =>{
      console.log(response)
      this.getPeople();
    })
  }

  updatePeople(){
    let people = this.createPeopleObject();
    this.peopleService.updatePeople(people).subscribe(response =>{
      console.log(response)
      this.getPeople();
    })
  }

  deletePeople(){
    this.peopleService.deletePeople(this.id).subscribe(response =>{
      console.log(response)
      this.getPeople();
    })
  }

  createPeopleObject(){
    let people = new People();
    people.id = this.id;
    people.name = this.name;

    return people;
  }
}
