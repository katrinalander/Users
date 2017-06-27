import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable()
export class UserService{
  private usersUrl = 'api/users'; //URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}

  getUser(id:number): Promise<User>{
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(resp => resp.json().data as User)
      .catch(this.handleError);
  }

  getUsers(): Promise<User[]>{
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(resp => resp.json().data as User[])
      .catch(this.handleError);
  }//stub

  update(user: User): Promise<User>{
    const url = `${this.usersUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user),{headers: this.headers})
      .toPromise().then(() => user)
      .catch(this.handleError);
  }

  create(user: User): Promise<User>{
    return this.http
      .post(this.usersUrl, JSON.stringify({fname: user.fname, lname: user.lname, email: user.email}),{headers: this.headers})
      .toPromise()
      .then(resp => resp.json().data as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}


