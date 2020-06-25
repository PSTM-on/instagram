import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { UserModel } from '../../models/user';
import { CommentInputModel } from '../../models/comment';
import { FriendinfoService } from '../../services/friendinfo.service';
import { MyinfoService } from '../../services/myinfo.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

  savedata: Array<string> = [];
  closeResult: string;
  myinfo: UserModel;
  friendinfo: UserModel;
  comments: Array<CommentInputModel> = [];

  like = true;
  heartempty = '../../../../assets/heart-empty.svg';
  heartsolid = '../../../../assets/heart-solid.svg';

  constructor(
    private modalService: NgbModal,
    private friendinfoService: FriendinfoService,
    private myinfoService: MyinfoService ) { }

  ngOnInit(): void {
    this.getSave();
    this.getFriendinfo();
    this.getMyinfo();
  }

  getSave(): void {
    for (let i = 0; i < 4; i++) {
      this.savedata.push(`http://placeimg.com/300/300/tech/${i}`);
    }
  }

  open(content) {
    this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  dismiss(reason) {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    this.modalService.dismissAll();
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

  getFriendinfo() {
    this.friendinfoService.getFriendinfo()
      .subscribe(friendinfo => this.friendinfo = friendinfo);
  }

  getMyinfo() {
    this.myinfoService.getMyinfo()
      .subscribe(myinfo => this.myinfo = myinfo);
  }

  addComment(comment: any): void {
    this.comments.push(comment.value);
    comment.value = '';
  }
}
