import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  // init names & type vars
  menuIsOpen: boolean;
  teamIndex: number = 0;
  teamLimitPostion: number = 0;
  NewIndex: number = 0;
  NewLimitPostion: number = 0;
  PartnerIndex: number = 0;
  PartnerLimitPostion: number = 0;
  constructor() {}

  ngOnInit() {
    this.menuIsOpen = false;
  }

  sliderTeam(type: string, classEl: string) {
    // init vars
    var team: HTMLElement = document.querySelector(classEl),
      parentWidth = team.clientWidth,
      childrenLangth = team.childElementCount,
      limit = parentWidth / childrenLangth;

    // action here
    if (type == "next") {
      if (this.teamIndex != childrenLangth - 1) {
        this.teamLimitPostion += limit;
        team.style.transform =
          "translate3d(-" + this.teamLimitPostion + "px, 0px, 0px)";
        ++this.teamIndex;
      }
    } else {
      if (this.teamIndex >= 1) {
        team.style.transform =
          "translate3d(-" + (this.teamLimitPostion - limit) + "px, 0px, 0px)";
        this.teamLimitPostion -= limit;
        --this.teamIndex;
      }
    }
  }

  //
  sliderNew(type: string, classEl: string) {
    // init vars
    var team: HTMLElement = document.querySelector(classEl),
      parentWidth = team.clientWidth,
      childrenLangth = team.childElementCount,
      limit = parentWidth / childrenLangth;

    // action here
    if (type == "next") {
      if (this.NewIndex != childrenLangth - 1) {
        this.NewLimitPostion += limit;
        team.style.transform =
          "translate3d(-" + this.NewLimitPostion + "px, 0px, 0px)";
        ++this.NewIndex;
      }
    } else {
      if (this.NewIndex >= 1) {
        team.style.transform =
          "translate3d(-" + (this.NewLimitPostion - limit) + "px, 0px, 0px)";
        this.NewLimitPostion -= limit;
        --this.NewIndex;
      }
    }
  }

  partner(type: string, classEl: string) {
    // init vars
    var team: HTMLElement = document.querySelector(classEl),
      parentWidth = team.clientWidth,
      childrenLangth = team.childElementCount,
      limit = parentWidth / childrenLangth;

    // action here
    if (type == "next") {
      if (this.PartnerIndex != childrenLangth - 1) {
        this.PartnerLimitPostion += limit;
        team.style.transform =
          "translate3d(-" + this.PartnerLimitPostion + "px, 0px, 0px)";
        ++this.PartnerIndex;
      }
    } else {
      if (this.PartnerIndex >= 1) {
        team.style.transform =
          "translate3d(-" + (this.PartnerLimitPostion - limit) + "px, 0px, 0px)";
        this.PartnerLimitPostion -= limit;
        --this.PartnerIndex;
      }
    }
  }
}
