import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharing',
  templateUrl: './sharing.component.html',
  styleUrls: ['./sharing.component.scss']
})
export class SharingComponent implements OnInit {

  // init names & type vars
  typeShare: string

  constructor() {

    // init vaue vars
    this.typeShare = 'def'
   }

  ngOnInit() {
  }

}
