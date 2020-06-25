import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FriendinfoService } from './friendinfo.service';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserupdateService {

  num: number;

  constructor(
    private friendinfoService: FriendinfoService,
  ) { }

  userUpdate(i, updatedvalue) {
    // this.frinedinfoService.friendinfo = JSON.parse(localStorage.getItem('friendinfo'));
    this.friendinfoService.followUpdate(i, updatedvalue);
    localStorage.setItem('friendinfo', JSON.stringify(this.friendinfoService.friendinfo));
  }

  getNum(i){
    this.num = i;
  }

  passNum(): Observable<number>{
    return of (this.num);
  }
}
