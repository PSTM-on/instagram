import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyinfoService } from '../services/myinfo.service';
import { UserModel } from '../models/user';
import { FriendinfoService } from '../services/friendinfo.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  myinfo: UserModel;

  constructor(
    private router: Router,
    private myinfoService: MyinfoService,
    private friendService: FriendinfoService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.myinfoService.myinfo) {
      return true;
    } else {

      const account = localStorage.getItem('myinfo');
      if (account) {
        this.myinfoService.myinfo = JSON.parse(account);
        this.myinfoService.loginUser = Number(this.myinfoService.myinfo.id) - 1;
        this.friendService.setFriendinfo();
        return true;
      }

      this.router.navigate(['']);
      return false;
    }

  }
}
