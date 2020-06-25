import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../models/user';
import { MyinfoService } from '../../services/myinfo.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  myinfo: UserModel;

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
