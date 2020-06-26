import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-tab',
  templateUrl: './explore-tab.component.html',
  styleUrls: ['./explore-tab.component.css']
})
export class ExploreTabComponent implements OnInit {

  imagedata1: string[] = [];
  imagedata2: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.getImage1();
    this.getImage2();
  }


  getImage1(): void {
    for (let i = 0; i < 3; i++) {
      this.imagedata1.push(`http://placeimg.com/350/350/animals/${i}`);
    }
  }

  getImage2(): void {
    for (let i = 0; i < 20; i++) {
      this.imagedata2.push(`http://placeimg.com/350/350/animals/${i + 3}`);
    }
  }

}
