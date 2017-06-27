import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports:[//need to do export for DemoModule
    AppComponent,
    UserDetailComponent,
    UsersComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
