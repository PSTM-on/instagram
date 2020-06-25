import { Component, Input, OnInit} from '@angular/core';
import { FriendinfoService } from '../../../services/friendinfo.service';
import { MyinfoService } from '../../../services/myinfo.service';

import { UserModel } from '../../../models/user';
import { CommentInputModel } from '../../../models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: Array<CommentInputModel> = [];
  friendinfo: UserModel;
  myinfo: UserModel;

  constructor(
    private friendinfoService: FriendinfoService,
    private myinfoService: MyinfoService
  ) {}

  ngOnInit() {
    this.getFriendinfo();
    this.getMyinfo();
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
