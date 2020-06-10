import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { UserModel } from '../../models/user';
import { ProfileModel } from '../../models/profile';

import { InstaService } from '../../services/insta.service';

@Component({
  selector: 'app-storybar',
  templateUrl: './storybar.component.html',
  styleUrls: ['./storybar.component.css']
})
export class StorybarsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    nav: true,
    dots: false,
    navText: ['<', '>'],
    responsive: {
      0: { items: 7 }, 400: { items: 8}, 740: { items: 8 }, 940: { items: 9 } },
  };

  users: UserModel;
  profiles1: ProfileModel;
  profiles2: ProfileModel;

  constructor(
    private instaService: InstaService
  ) {

  }

  ngOnInit() {
    this.getProfiles1();
    this.getProfiles2();
    this.getUsers();
  }

  getProfiles1() {
    this.instaService.getProfiles1()
      .subscribe((profiles1) => this.profiles1 = profiles1);
  }

  getProfiles2() {
    this.instaService.getProfiles2()
      .subscribe((profiles2) => this.profiles2 = profiles2);
  }

  getUsers() {
    this.instaService.getUsers()
      .subscribe(users => this.users = users);
  }
}
