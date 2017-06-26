import {Component, OnInit} from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit{
  users: User[] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void{
    this.userService.getUsers()
      .then(users => this.users = users.slice(1,5));
  }
}
