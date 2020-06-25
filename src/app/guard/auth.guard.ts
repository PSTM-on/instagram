import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyinfoService } from '../services/myinfo.service';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  myinfo: UserModel;

  constructor(
    private router: Router,
    private myinfoService: MyinfoService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.myinfoService.getMyinfo().subscribe(myinfo => this.myinfo = myinfo);
      if (this.myinfo.id){
        return true;
      }
      this.router.navigate(['']);
      return false;
    }
  }
