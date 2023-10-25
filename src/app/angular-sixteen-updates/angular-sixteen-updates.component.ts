import { Component, Input, OnInit } from '@angular/core';

interface User {
  name: string;
  age: number;
  birthday: string;
};

@Component({
  selector: 'app-angular-sixteen-updates',
  templateUrl: './angular-sixteen-updates.component.html',
  styleUrls: ['./angular-sixteen-updates.component.css']
})
export class AngularSixteenUpdatesComponent implements OnInit{

  @Input() userInput! :User //newFeaturev16
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  console.log("angular 15");

  }

}
