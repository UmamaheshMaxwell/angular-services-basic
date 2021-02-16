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
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
   this.peopleService.getPeople().subscribe(response => {
    this.people = response as any
   })
  }

  addPeople(){
    
  }
}
