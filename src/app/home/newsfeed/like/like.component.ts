import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  like = true;
  heartempty = '../../../../assets/heart-empty.svg';
  heartsolid = '../../../../assets/heart-solid.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
