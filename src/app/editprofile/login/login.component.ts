import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  markIcon = '../../../assets/geomark.svg';
  arrowIcon = '../../../assets/arrow.svg';

  lat = 40.730610;
  lng = -73.935242;

  public isCollapsedA = true;
  public isCollapsedB = true;

  constructor() {}

  ngOnInit() {
  }

}
