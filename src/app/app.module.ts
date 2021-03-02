import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { TodoComponent } from './components/todo/todo.component';
import { AlbumComponent } from './components/album/album.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PeopleComponent } from './components/people/people.component';
import { StudentComponent } from './components/student/student.component';
import { PostComponent } from './components/post/post.component';
import { NgxPaginationModule } from 'ngx-pagination'
import { CookieService } from 'ngx-cookie-service';
import { CookieComponent } from './components/cookie/cookie.component';
import { ValidateComponent } from './components/validate/validate.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UserComponent,
    TodoComponent,
    AlbumComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    ErrorComponent,
    ProductDetailsComponent,
    PeopleComponent,
    StudentComponent,
    PostComponent,
    CookieComponent,
    ValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
