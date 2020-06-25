import { Component, OnInit } from '@angular/core';

import { UserModel } from '../models/user';
import { MyinfoService } from '../services/myinfo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myinfo: UserModel;

  logoImage = '../../assets/logo.PNG';
  homeIcon = '../../assets/home.PNG';
  exploreIcon = '../../assets/explore.PNG';
  likeIcon = '../../assets/like.PNG';

  constructor(
    private myinfoService: MyinfoService
  ) { }

  ngOnInit() {
  this.getMyinfo();
  }

  getMyinfo() {
    this.myinfoService.getMyinfo()
      .subscribe(myinfo => this.myinfo = myinfo);
  }

}
