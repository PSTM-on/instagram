import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../models/user';
import { MyinfoService } from '../../services/myinfo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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
