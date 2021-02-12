import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users :User[] = [];
  constructor(private userService: UserService) { }

  getUsers(){
    this.userService.getUsers().subscribe(response => {
      this.userJSONResponse(response)
    })
  }

  userJSONResponse(response:any){
    response.forEach((user:any) => {
      let userData:User = new User()
        userData.id = user.id
        userData.name = user.name;
        userData.email = user.email
        userData.city = user.address.city;
        userData.zipcode = user.address.zipcode
        userData.phone = user.phone;
        userData.website = user.website
        userData.company = user.company.name;
        this.users.push(userData)
    })
  }
}
