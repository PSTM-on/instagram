import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { UserModel } from '../../models/user';
import { FriendinfoService } from '../../services/friendinfo.service';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.css']
})
export class HeaderSearchComponent implements OnInit {

  friendinfo: UserModel[];
  friendinfo$: Observable<UserModel[]>;

  searchIcon: '../../../assets/search.PNG';

  private searchTerms = new Subject<string>();
  public term: any;

  constructor(
    private friendinfoService: FriendinfoService
  ) {}

  ngOnInit() {
    this.getFriendinfo();
    this.friendinfo$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.friendinfoService.searchFriend(term)),
    );
  }

  getFriendinfo() {
    this.friendinfoService.getFriendinfo()
      .subscribe(friendinfo => this.friendinfo = friendinfo);
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
