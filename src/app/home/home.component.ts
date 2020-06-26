import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { UserModel } from '../models/user';
import { AllusersService } from '../services/allusers.service';
import { MyinfoService } from '../services/myinfo.service';
import { FriendinfoService } from '../services/friendinfo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allusers: UserModel[];
  loginUser = null;
  id: string ;
  pw: string;

  iphone = '../../../assets/iphone.gif';
  biglogo = '../../../assets/logobig.PNG';
  facebook = '../../../assets/facebook.PNG';
  appstore = '../../../assets/appstore.PNG';
  googleplay = '../../../assets/googleplay.PNG';

  constructor(
    private location: Location,
    private allusersService: AllusersService,
    private myinfoService: MyinfoService,
    private friendinfoService: FriendinfoService
  ) {
  }

  ngOnInit() {
    this.getAllUsers();
    this.getLoginUser();
  }

  getAllUsers() {
    this.allusersService.getAllUsers()
    .subscribe(allusers => this.allusers = allusers);
  }

  getLoginUser() {
    this.myinfoService.getLoginUser()
    .subscribe(loginUser => this.loginUser = loginUser);
  }

  login(){
    const num = Number(this.id) - 1;
    if (String(this.allusers[num].pw) === this.pw){
      this.myinfoService.loginUser = num;
      this.loginUser = num;
      this.myinfoService.setMyinfo();
      this.friendinfoService.setFriendinfo();
      this.location.go('/');
    }
  }
}
