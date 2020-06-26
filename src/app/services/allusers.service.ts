import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UserModel } from '../models/user';
import * as userjson from '../users.json';

@Injectable({
  providedIn: 'root'
})
export class AllusersService {

  allusers: UserModel[];
  specificUser: UserModel;

  constructor() {
    // this.initiateUsers();
  }

  initiateUsers() {
      this.allusers = JSON.parse(JSON.stringify(userjson)).default;
      // localStorage.clear();
      localStorage.setItem('allusers', JSON.stringify(this.allusers));
  }

  getAllUsers(): Observable<UserModel[]> {
    // this.allusers = JSON.parse(localStorage.getItem('allusers'));
    return of (this.allusers);
  }

  getUserInfo(i){
    this.specificUser = this.allusers[i];
    return of(this.specificUser);
  }

}
