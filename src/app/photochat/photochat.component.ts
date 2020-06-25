import { Component, OnInit } from '@angular/core';

import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-photochat',
  templateUrl: './photochat.component.html',
  styleUrls: ['./photochat.component.css']
})
export class PhotochatComponent implements OnInit {

  photoIndex: number;

  constructor(
    private generalService: GeneralService,
  ) { }

  ngOnInit() {
    this.getPhotoIndex();
    }

  getPhotoIndex() {
    this.generalService.getPhotoIndex()
      .subscribe(photoIndex => this.photoIndex = photoIndex);
  }
}
