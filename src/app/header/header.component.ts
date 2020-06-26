import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { UserModel } from '../models/user';
import { MyinfoService } from '../services/myinfo.service';
import { FriendinfoService } from '../services/friendinfo.service';
import { UserupdateService } from '../services/userupdate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myinfo: UserModel;
  friendinfo: UserModel[];
  closeResult: string;

  logoImage = '../../assets/logo.PNG';
  homeIcon = '../../assets/home.PNG';
  exploreIcon = '../../assets/explore.PNG';
  likeIcon = '../../assets/like.PNG';

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

  getMyinfo() {
    this.myinfoService.getMyinfo()
      .subscribe(myinfo => this.myinfo = myinfo);
  }

  getFriendinfo() {
    this.friendinfoService.getFriendinfo()
      .subscribe(friendinfo => this.friendinfo = friendinfo);
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
