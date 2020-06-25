import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserModel } from '../../models/user';
import { FriendinfoService } from '../../services/friendinfo.service';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  friendinfo: UserModel;
  chat = '../../../assets/chat.svg';
  share = '../../../assets/share.svg';

  constructor(
    private friendinfoService: FriendinfoService,
    private generalService: GeneralService,
  ) { }

  ngOnInit() {
  this.getFriendinfo();
  }

  getFriendinfo() {
    this.friendinfoService.getFriendinfo()
      .subscribe(friendinfo => this.friendinfo = friendinfo);
  }

  photoIndex(i){
    this.generalService.getPhotoIndex = i;
    console.log(this.generalService.getPhotoIndex);
  }

}
