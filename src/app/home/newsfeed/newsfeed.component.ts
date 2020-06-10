import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostModel } from '../../models/post';
import { PhotoModel } from '../../models/photo';
import { ProfileModel } from '../../models/profile';
import { UserModel } from '../../models/user';

import { InstaService } from '../../services/insta.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  posts: PostModel;
  photos: PhotoModel;
  profiles1: ProfileModel;
  profiles2: ProfileModel;
  users: UserModel;

  constructor(
    private instaService: InstaService
  ) {
  }

  ngOnInit() {
  this.getPhotos();
  this.getPosts();
  this.getProfiles1();
  this.getProfiles2();
  this.getUsers();
  }

  getPosts() {
    this.instaService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  getPhotos(): void{
  this.instaService.getPhotos()
    .subscribe(photos => this.photos = photos );
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
