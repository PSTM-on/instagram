import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  photoIndex: number;

  constructor() { }

  getPhotoIndex(): Observable<number> {
    return of(this.photoIndex);
  }
}
