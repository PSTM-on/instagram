import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from '../models/user';
import { CommentInputModel } from '../models/comment';
import { FriendinfoService} from '../services/friendinfo.service';
import { MyinfoService } from '../services/myinfo.service';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-photochat',
  templateUrl: './photochat.component.html',
  styleUrls: ['./photochat.component.css']
})
export class PhotochatComponent implements OnInit {

  photoIndex: number;

  postdata: string[] = [];
  closeResult: string;
  friendinfo: UserModel[] = [];
  myinfo: UserModel;
  comments: CommentInputModel[] = [];
  mark = true;

  chat = '../../assets/chat.svg';
  share = '../../assets/share.svg';
  faIcon = '../../assets/fa_icon.PNG';
  meIcon = '../../assets/me_icon.PNG';
  twIcon = '../../assets/tw_icon.PNG';
  emIcon = '../../assets/em_icon.PNG';
  liIcon = '../../assets/li_icon.PNG';
  bookmarkEmpty = '../../assets/bookmark-empty.svg';
  bookmarkSolid = '../../assets/bookmark-solid.svg';

  constructor(
    private generalService: GeneralService,
    private modalService: NgbModal,
    private friendinfoService: FriendinfoService,
    private myinfoService: MyinfoService,
  ) {}

  ngOnInit(): void {
    this.getPost();
    this.getMyinfo();
    this.getFriendinfo();
    this.getPhotoIndex();
  }

  getPhotoIndex() {
    this.generalService.getPhotoIndex()
      .subscribe(photoIndex => this.photoIndex = photoIndex);
  }

  getPost(): void {
    for (let i = 0; i < 10; i++) {
      this.postdata.push(`http://placeimg.com/300/300/arch/${i}`);
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

  open(content) {
    this.modalService.open(content, {
      size: 'lg'
    }).result.then((result) => {
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
}
