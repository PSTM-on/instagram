import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-igtv',
  templateUrl: './igtv.component.html',
  styleUrls: ['./igtv.component.css']
})
export class IgtvComponent implements OnInit {

  media = '../../../assets/media.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
