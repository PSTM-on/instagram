import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserModel } from '../models/user';
import * as userjson from '../users.json';

@Injectable({
  providedIn: 'root'
})
export class AllusersService {

  allusers: UserModel[];
  specificUser: UserModel;

  private instaUrl = 'api/insta';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) {
    this.initiateUsers();
  }

  initiateUsers() {
      this.allusers = JSON.parse(JSON.stringify(userjson)).default;
      localStorage.clear();
      localStorage.setItem('allusers', JSON.stringify(this.allusers));
  }

  getAllUsers(): Observable<UserModel[]> {
    // this.allusers = JSON.parse(localStorage.getItem('allusers'));
    return of (this.allusers);
  }

  searchHeroes(term: string): Observable<UserModel[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<UserModel[]>(`${this.instaUrl}/?name=${term}`);
  }

  getUserInfo(i){
    this.specificUser = this.allusers[i];
    return of(this.specificUser);
  }

}
