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
  currentStep: number = 1;
  
  constructor(private location: Location, private router: Router) { }
  
  ngOnInit() {
    this.rightPanel.nativeElement.style.width = window.innerWidth - 480 + 'px';
    console.log(window.innerWidth - 480);
    // $(".tele").intlTelInput({
    //   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
    // });
    this.steps = [
      {
        number: 1,
        title: `Define your <br>
        Intellectual property`,
        desc: `What type of intellectual property is it? <br> Under which name shall it be registered?`,
        active: true,
        data: {},
        togglers: ['Property type', 'Property description'],
        activeToggler: 'Property type'
      },
      {
        number: 2,
        title: `Upload file(s)`,
        desc: `Upload supporting <br> documents that include the detailed <br> description of the intellectual property.`,
        data: {},
        togglers: ['Upload files'],
        activeToggler: 'Upload files'
      },
      {
        number: 3,
        title: `Owner(s) details`,
        desc: `Fill in information <br> like your address, phone number <br> and current place of residence.`,
        data: {
          types: [
            {
              id: 1,
              text: 'An individual (myself)'
            },
            {
              id: 2,
              text: 'A registered company'
            },
            {
              id: 3,
              text: 'A group of owners'
            },
          ]
        },
        togglers: ['Owner(s) type', 'Owner(s) details'],
        activeToggler: 'Owner(s) type'
      },
      {
        number: 4,
        title: `Payment`,
        desc: `Review your application <br> and finalise payment with the option <br> to have a hard copy delivered <br> at your doorstep.`,
        data: {},
        togglers: ['Review', 'Payment'],
        activeToggler: 'Review'
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
    if(this.currentStep == 3) {
      if(this.steps[2].data.selectedType) {
        this.steps[2].data.selectedType = null;
        return;
      }
    }
    this.currentStep--;
  }

}
