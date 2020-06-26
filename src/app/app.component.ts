import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AllusersService } from './services/allusers.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private allUserService: AllusersService
  ){
    this.allUserService.initiateUsers();
  }

}
