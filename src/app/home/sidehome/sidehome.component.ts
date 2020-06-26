import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { UserModel } from '../../models/user';
import { FriendinfoService } from '../../services/friendinfo.service';
import { MyinfoService } from '../../services/myinfo.service';
import { UserupdateService } from '../../services/userupdate.service';

@Component({
  selector: 'app-sidehome',
  templateUrl: './sidehome.component.html',
  styleUrls: ['./sidehome.component.css']
})

export class SidehomeComponent implements OnInit {

  myinfo: UserModel;
  friendinfo: UserModel[];
  closeResult: string;

  constructor(
    private friendinfoService: FriendinfoService,
    private myinfoService: MyinfoService,
    private userupdateService: UserupdateService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getMyinfo();
    this.getFriendinfo();
  }

  getFriendinfo() {
    this.friendinfoService.getFriendinfo()
      .subscribe(friendinfo => this.friendinfo = friendinfo);
  }

  getMyinfo() {
    this.myinfoService.getMyinfo()
      .subscribe(myinfo => this.myinfo = myinfo);
  }

  followchange(i){
    this.friendinfo[i].following = !this.friendinfo[i].following;
    this.userupdateService.userUpdate(i, this.friendinfo[i].following);
    this.getFriendinfo();
    this.modalService.dismissAll();
  }

  friendpage(i){
    this.userupdateService.getNum(i);
  }

  open(content) {
    this.modalService.open(content, {size: 'sm'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
