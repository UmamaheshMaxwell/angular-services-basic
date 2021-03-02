import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  firstName!: string
  lastName!: string
  email!: string
  constructor() { }

  ngOnInit(): void {
  }

  getUserDetails(userForm:any){
    console.log(userForm.value)
  }
}
