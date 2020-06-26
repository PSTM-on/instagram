import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { UserModel } from '../../models/user';
import { FriendinfoService } from '../../services/friendinfo.service';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  friendinfo: UserModel[];
  closeResult: string;
  mark = true;

  chat = '../../../assets/chat.svg';
  share = '../../../assets/share.svg';
  faIcon = '../../../assets/fa_icon.PNG';
  meIcon = '../../../assets/me_icon.PNG';
  twIcon = '../../../assets/tw_icon.PNG';
  emIcon = '../../../assets/em_icon.PNG';
  liIcon = '../../../assets/li_icon.PNG';
  bookmarkEmpty = '../../../assets/bookmark-empty.svg';
  bookmarkSolid = '../../../assets/bookmark-solid.svg';

  constructor(
    private friendinfoService: FriendinfoService,
    private generalService: GeneralService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  this.getFriendinfo();
  }

  getFriendinfo() {
    this.friendinfoService.getFriendinfo()
      .subscribe(friendinfo => this.friendinfo = friendinfo);
  }

  photoIndex(i){
    this.generalService.photoIndex = i;
  }

  open(content) {
    this.modalService.open(content, {
      size: 'sm'
    }).result.then((result) => {
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
