import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  
  @ViewChild('rightPanel', {static: true}) rightPanel: ElementRef;

  steps: any[] = [];
  currentStep: number = 2;
  
  constructor(private location: Location, private router: Router) { }
  
  ngOnInit() {
    this.rightPanel.nativeElement.style.width = window.innerWidth - 480 + 'px';
    console.log(window.innerWidth - 480);
    
    this.steps = [
      {
        number: 1,
        title: `Define your <br>
        Intellectual property`,
        desc: `What type of intellectual property is it? <br> Under which name shall it be registered?`,
        active: true
      },
      {
        number: 2,
        title: `Upload file(s)`,
        desc: `Upload supporting <br> documents that include the detailed <br> description of the intellectual property.`
      },
      {
        number: 3,
        title: `Owner(s) details`,
        desc: `Fill in information <br> like your address, phone number <br> and current place of residence.`
      },
      {
        number: 4,
        title: `Payment`,
        desc: `Review your application <br> and finalise payment with the option <br> to have a hard copy delivered <br> at your doorstep.`
      },
    ] 
  }

  setWidth(el) {
    console.log(el);
  }

  nextStep(e: any) {
    e.preventDefault();
    if(this.currentStep == this.steps.length) {
      this.router.navigate(['dashboard']);
    }
    this.currentStep++;
  }

  back() {
    if(this.currentStep == 1) {
      this.location.back();
      return;
    }
    this.currentStep--;
  }

}
