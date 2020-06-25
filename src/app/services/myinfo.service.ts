import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AllusersService } from './allusers.service';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MyinfoService {

  myinfo: UserModel;
  loginUser = null;

  constructor(
    private allusersService: AllusersService,
  ) {}

  setMyinfo() {
    this.myinfo = this.allusersService.allusers[this.loginUser];
    localStorage.setItem('myinfo', JSON.stringify(this.myinfo));
    localStorage.setItem('loginuser', this.loginUser);
  }

  getMyinfo(): Observable < UserModel > {
    // this.myinfo = JSON.parse(localStorage.getItem('myinfo'));
    return of(this.myinfo);
  }

  getLoginUser(): Observable < number > {
    // this.loginUser = Number(localStorage.getItem('loginuser'));
    return of(this.loginUser);
  }
}
