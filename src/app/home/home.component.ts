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

  iphone = '../../../assets/iphone.gif';
  biglogo = '../../../assets/logobig.PNG';
  facebook = '../../../assets/facebook.PNG';
  appstore = '../../../assets/appstore.PNG';
  googleplay = '../../../assets/googleplay.PNG';

  id: string ;
  pw: string;

  constructor(
    private location: Location,
    private allusersService: AllusersService,
    private myinfoService: MyinfoService,
    private friendinfoService: FriendinfoService
  ) {
  }

  ngOnInit() {
    this.getLoginUser();
    this.getAllUsers();
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
    for (let i = 0 ; i < 10 ; i++){
      if (this.id === String(this.allusers[i].id) && this.pw === String(this.allusers[i].pw)){
        this.myinfoService.loginUser = i;
        this.loginUser = i;
        this.myinfoService.setMyinfo();
        this.friendinfoService.setFriendinfo();
        this.location.go('/');
        break;
      }
    }
  }

}
