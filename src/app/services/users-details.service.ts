import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersDetailsService {

  constructor(private http: Http) { }
  getUsersDetails() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/users/getUsers')
        .map(response => response.json())
        .subscribe(response => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  setUserRole(objectId,userRole) {
    let headers = new Headers();
    return this.http.get('http://localhost:3000/users/profile', { headers: headers })
      .map(res => res.json());

  }
}
