import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  intro = 'https://about.instagram.com/about-us';
  help = 'https://help.instagram.com/';
  promo = 'https://about.instagram.com/blog/';
  api = 'https://www.instagram.com/developer/';
  recruit = 'https://www.instagram.com/about/jobs/';
  personif = 'https://help.instagram.com/519522125107875';
  condition = 'https://help.instagram.com/581066165581870';
  location = 'https://www.instagram.com/explore/locations/';
  popular = 'https://www.instagram.com/directory/profiles/';
  hashtag = 'https://www.instagram.com/directory/hashtags/';

  constructor() { }

  ngOnInit(): void {
  }

}
