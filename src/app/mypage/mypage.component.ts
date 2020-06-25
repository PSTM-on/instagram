import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, Event, NavigationStart, RoutesRecognized, RouteConfigLoadStart, RouteConfigLoadEnd,
  NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { UserModel } from '../models/user';
import { AllusersService } from '../services/allusers.service';
import { MyinfoService } from '../services/myinfo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {

  allusers: UserModel[] = [];
  userInfo: UserModel;
  loginUser: number;
  usernameURL: string;
  pageID: number;
  closeResult: string;

  setting = '../../../assets/setting.svg';

  constructor(
    private allusersService: AllusersService,
    private myinfoService: MyinfoService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getAllUsers();
    this.getLoginUser();
    this.getPageID();
    this.getEventPageID();
  }

  getAllUsers() {
    this.allusersService.getAllUsers()
      .subscribe(allUsers => this.allusers = allUsers);
  }

  getLoginUser() {
    this.myinfoService.getLoginUser()
      .subscribe(loginUser => this.loginUser = loginUser);
  }

  getPageID() {
    this.usernameURL = this.route.snapshot.paramMap.get('username');
    this.pageID = this.allusers.findIndex((user) => user.username === this.usernameURL);
    // this.allusersService.getUserInfo(this.pageID).subscribe(userInfo => this.userInfo = userInfo);
    this.allusersService.getUserInfo(this.pageID).subscribe(userInfo => this.userInfo = userInfo);
  }

  getEventPageID(){
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (!event.url.includes('/', 1)) {
          this.usernameURL = event.url.slice(1, event.url.length);
          this.pageID = this.allusers.findIndex((user) => user.username === this.usernameURL);
          this.allusersService.getUserInfo(this.pageID).subscribe(userInfo => this.userInfo = userInfo); }
      }});
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
