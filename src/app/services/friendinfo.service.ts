import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UserModel } from '../models/user';
import { AllusersService } from './allusers.service';
import { MyinfoService } from './myinfo.service';

@Injectable({
  providedIn: 'root'
})
export class FriendinfoService {

  friendinfo: UserModel;

  constructor(
    private allusersService: AllusersService,
    private myinfoService: MyinfoService,
  ) { }

  setFriendinfo() {
    const userstring = JSON.stringify(this.allusersService.allusers);
    const start = userstring.indexOf('{\"id\":' + (this.myinfoService.loginUser + 1));
    const stringlength = userstring.length;
    let end: number;
    for (let i = 0 + start ; i < stringlength; i++){
      if (userstring[i] === '}'){
        end = i + 2;
        break;
      }
    }
    const friendstring = userstring.slice(0, start) + userstring.slice(end, stringlength);
    localStorage.setItem('friendinfo', friendstring);
    this.friendinfo = JSON.parse(friendstring);
  }

  getFriendinfo(): Observable<UserModel> {
    // this.friendinfo = JSON.parse(localStorage.getItem('friendinfo'));
    return of (this.friendinfo);
  }

  followUpdate(i, updatedvalue){
    this.friendinfo[i].following = updatedvalue;
  }

}
