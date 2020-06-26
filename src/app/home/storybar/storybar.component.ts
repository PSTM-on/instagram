import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { UserModel } from '../../models/user';

import { FriendinfoService } from '../../services/friendinfo.service';

@Component({
  selector: 'app-storybar',
  templateUrl: './storybar.component.html',
  styleUrls: ['./storybar.component.css']
})
export class StorybarsComponent implements OnInit {

  friendinfo: UserModel[];

  customOptions: OwlOptions = {
    loop: true,
    nav: true,
    dots: false,
    navText: ['<', '>'],
    responsive: {
      0: { items: 7 }, 400: { items: 8}, 740: { items: 8 }, 940: { items: 9 } },
  };

  constructor(
    private friendinfoService: FriendinfoService
  ) { }

  ngOnInit() {
    this.getFriendinfo();
  }

  getFriendinfo() {
    this.friendinfoService.getFriendinfo()
      .subscribe(friendinfo => this.friendinfo = friendinfo);
  }

}
