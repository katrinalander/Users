import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
// import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { OrderByDoneAndDatePipe } from './order-by-done-and-date.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserDetailComponent } from './user-detail.component';
import {DashboardComponent} from "./dashboard.component";
import {UsersComponent} from "./users.component";
import {UserService} from "./user.service";

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderByDoneAndDatePipe,
    UserDetailComponent,
    UsersComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
