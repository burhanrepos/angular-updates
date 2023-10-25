import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-version-angular-from-14';
  constructor(private router: Router) {

  }
  public userInput =  {name:'Burhan',age:23,birthday:'02-09-1999'};
}
