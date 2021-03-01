import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  firstCookieValue!: any;
  isFirstCookie: boolean = false

  secondCookieValue!: any;
  isSecondCookie: boolean = false

  thirdCookieValue!: any;
  isThirdCookie: boolean = false

  cookies!:{}

  isAvaialable!: boolean

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.deleteAllCookies()
    this.setAllTheCookies()
    this.getAllTheCookies()
  }

  setAllTheCookies(){
      // First Cookie
      this.cookieService.set('first-cookie', 'first-cookie-service')  
      this.firstCookieValue = this.cookieService.get('first-cookie')
      this.isFirstCookie = this.cookieService.check('first-cookie')
  
      // Second Cookie
      this.cookieService.set('second-cookie', '{"name": "uma"}');
      this.secondCookieValue = JSON.parse(this.cookieService.get('second-cookie'));
      this.isSecondCookie = this.cookieService.check('second-cookie')
  
      // Third Cookie
      this.cookieService.set('third-cookie', 'third-cookie-service');
      this.thirdCookieValue = this.cookieService.get('third-cookie')
      this.isThirdCookie = this.cookieService.check('third-cookie')
  }

  deleteSpecificCookies(){
    this.cookieService.delete('cookie-name')
    this.cookieService.delete('first-Cookie')
  }

  deleteAllCookies(){
    this.cookieService.deleteAll();
  }

  getAllTheCookies(){
    // Get All the Cookies
    this.cookies = this.cookieService.getAll();
    console.log(this.cookies)
  }

}
