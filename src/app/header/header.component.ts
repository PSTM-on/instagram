import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoUrl = 'http://localhost:4200';
  logoImage = '../../../assets/logo.PNG';

  homeUrl = 'http://localhost:4200';
  homeIcon = '../../../assets/home.PNG';

  exploreUrl = 'http://localhost:4200';
  exploreIcon = '../../../assets/explore.PNG';

  likeIcon = '../../../assets/like.PNG';

  mypageUrl = 'http://localhost:4200';
  mypageIcon = '../../../assets/profile.PNG';

  constructor(
  ) { }

  ngOnInit(): void {

  }


}
