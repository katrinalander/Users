import { Component, OnInit, Input} from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit{
  @Input() user: User;
  userForm: FormGroup;
  title = 'USERS App';
  users: User[];
  selectedUser: User;
  newUser = new User();

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({fname: '', lname: '', email: ''});
  }

  onSubmit() {
    console.log("inside ADD function!");
    this.user = this.prepareUser();
    if (!this.user.fname || !this.user.lname || !this.user.email) { return; }
    this.userService.create(this.user)
      .then(user =>{
        this.users.push(user);
        this.selectedUser = null;
      });
  }

  prepareUser(): User {
    const formModel = this.userForm.value;
    this.newUser.fname = formModel.fname.trim();
    this.newUser.lname = formModel.lname.trim();
    this.newUser.email = formModel.email.trim();
    console.log("NEW USER IS: " + this.newUser);
    return this.newUser;
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  // get createdUser() {
  //   console.log(JSON.stringify(this.newUser));
  //   return JSON.stringify(this.newUser);
  // }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  gotoDetail():void{
    this.router.navigate(['/detail', this.selectedUser.id]);
  }
}
