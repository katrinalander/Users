import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  template:`
  <h1 style="text-align:center">{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/users" routerLinkActive="active">List of Users</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent{
  title = 'Users APP';
}
