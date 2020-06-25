import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  // imagedata: HTMLImageElement;
  imagedata1: Array<string> = [];
  imagedata2: Array<string> = [];

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
