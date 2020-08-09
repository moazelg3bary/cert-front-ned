import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss']
})
export class CompleteProfileComponent implements OnInit {

  step: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
