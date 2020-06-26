import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { UserModel } from '../../models/user';
import { FriendinfoService } from '../../services/friendinfo.service';
import { UserupdateService } from '../../services/userupdate.service';

@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.css']
})
export class SeeAllComponent implements OnInit {

  closeResult: string;
  friendinfo: UserModel[];

  customOptions: OwlOptions = {
    loop: true,
    nav: true,
    dots: false,
    navText: ['<', '>'],
    responsive: {
      0: { items: 2 }, 550: { items: 3 }, 700: { items: 4 }, 850: { items: 5 }, 1000: { items: 6 }
    },
  };

  constructor(
    private modalService: NgbModal,
    private friendinfoService: FriendinfoService,
    private userupdateService: UserupdateService
  ) {
  }

  ngOnInit() {
    this.getFriendinfo();
  }

  getFriendinfo() {
    this.friendinfoService.getFriendinfo().subscribe(friendinfo => this.friendinfo = friendinfo);
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

  followchange(i){
    this.friendinfo[i].following = !this.friendinfo[i].following;
    this.userupdateService.userUpdate(i, this.friendinfo[i].following);
    this.getFriendinfo();
    this.modalService.dismissAll();
  }
}
