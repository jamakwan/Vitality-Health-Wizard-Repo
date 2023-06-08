import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calc',
  templateUrl: './bmi-calc.page.html',
  styleUrls: ['./bmi-calc.page.scss'],
})
export class BmiCalcPage implements OnInit {

  height: number;
  weight: number;
  bmi: number;

  constructor() {
    this.height = 0;
    this.weight = 0;
    this.bmi = 0;
   }

  ngOnInit() {
  }

  logUserInput() {
    console.log('Height:', this.height);
    console.log('Weight:', this.weight);
    this.bmi = 703 * (this.weight) / (this.height*this.height);
    console.log('BMI:',this.bmi);
  }
}
