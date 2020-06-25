import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { UserModel } from '../../models/user';
import { CommentInputModel } from '../../models/comment';
import { FriendinfoService } from '../../services/friendinfo.service';
import { MyinfoService } from '../../services/myinfo.service';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {

  postdata: Array<string> = [];
  closeResult: string;
  friendinfo: UserModel;
  myinfo: UserModel;
  comments: Array<CommentInputModel> = [];

  like = true;
  heartempty = '../../../../assets/heart-empty.svg';
  heartsolid = '../../../../assets/heart-solid.svg';

  constructor(
    private modalService: NgbModal,
    private friendinfoService: FriendinfoService,
    private myinfoService: MyinfoService,
    ) {}

  ngOnInit(): void {
    this.getPost();
    this.getMyinfo();
    this.getFriendinfo();
  }

  getPost(): void {
    for (let i = 0; i < 10; i++) {
      this.postdata.push(`http://placeimg.com/300/300/arch/${i}`);
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

  getMyinfo() {
    this.myinfoService.getMyinfo()
      .subscribe(myinfo => this.myinfo = myinfo);
  }

  getFriendinfo() {
    this.friendinfoService.getFriendinfo()
      .subscribe(friendinfo => this.friendinfo = friendinfo);
  }

  addComment(comment: any): void {
    this.comments.push(comment.value);
    comment.value = '';
  }

}

