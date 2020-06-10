import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { UserModel } from '../models/user';
import { PostModel } from '../models/post';
import { PhotoModel } from '../models/photo';
import { CommentModel } from '../models/comment';
import { ProfileModel } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class InstaService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
  private profilesUrl1 = 'https://reqres.in/api/users?page=1';
  private profilesUrl2 = 'https://reqres.in/api/users?page=2';
  private instaUrl = 'api/insta';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<UserModel> {
    return this.http.get<UserModel>(this.usersUrl);
  }

  getUser(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.usersUrl}/${id}`);
  }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`${this.postsUrl}/${id}`);
  }

  getPosts(): Observable<PostModel> {
    return this.http.get<PostModel>(this.postsUrl);
  }

  getPhotos(): Observable<PhotoModel> {
    return this.http.get<PhotoModel>(this.photosUrl);
  }

  getComments(): Observable<CommentModel> {
    return this.http.get<CommentModel>(this.commentsUrl);
  }

  getProfiles1(): Observable<ProfileModel> {
    return this.http.get<ProfileModel>(this.profilesUrl1);
  }

  getProfiles2(): Observable<ProfileModel> {
    return this.http.get<ProfileModel>(this.profilesUrl2);
  }

  // getProfilePicture(): Observable<ProfilePicture[]>{
  //   let i = 0 ;
  //   for (i = 0; i < 20; i++){
  //     this[i].url = this.profileUrl + '?image=' + Math.floor(Math.random() * 20) ;
  //   }
  //   return this.getProfilePicture() ;
  // }

  searchHeroes(term: string): Observable<PostModel[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<PostModel[]>(`${this.instaUrl}/?name=${term}`);
  }
}
