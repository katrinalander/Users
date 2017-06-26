import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {UserService} from "./user.service";
import { User } from './user';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  // user: User,
})

export class UserDetailComponent implements OnInit{
  @Input() user: User;

  constructor( private userService: UserService,
               private route: ActivatedRoute,
               private location: Location){}

  ngOnInit(): void{
    this.route.params
      .switchMap((params: Params) => this.userService.getUser(+params['id']))
      .subscribe(user => this.user = user);
  }

  goBack(): void{
    this.location.back();
  }
}
