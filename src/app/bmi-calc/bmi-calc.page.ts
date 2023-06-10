import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-bmi-calc',
  templateUrl: './bmi-calc.page.html',
  styleUrls: ['./bmi-calc.page.scss'],
})
export class BmiCalcPage implements OnInit {

  feet : string;
  inches: string;
  lbs : string;
  height: number;
  weight: number;
  bmi: number;

  constructor() {
    this.height = 0;
    this.weight = 0;
    this.bmi = 0;
    this.feet = "";
    this.inches = "";
    this.lbs = "";   
  }




  ngOnInit() {
  }

  logUserInput() {
    // console.log('Height:', this.height);
    // console.log('Weight:', this.weight);
    // this.bmi = 703 * (this.weight) / (this.height*this.height);
    // console.log('BMI:',this.bmi); 

    this.height = parseInt(this.feet) * 12 + parseInt(this.inches);
    height.push(this.height)
    localStorage.setItem("height", JSON.stringify(height));

    // Convert the weight to a number
    this.weight = parseInt(this.lbs);
    weight.push(this.weight)
    localStorage.setItem("weight", JSON.stringify(weight));
  
    // Perform BMI calculation
    this.bmi = (this.weight/(this.height*this.height))*703;

    console.log('Height: ' + this.feet + ' ft ' + this.inches + ' in');
    console.log('Weight: ' + this.lbs + ' lbs')
    console.log('BMI:', this.bmi);
  }
}

var height = [-1];
if(localStorage.getItem("height") != null){
  // @ts-ignore we checked above it was null!
  height = JSON.parse(localStorage.getItem("height"));
}
else{
  height.pop()
}

var weight = [-1];
if(localStorage.getItem("weight") != null){
  // @ts-ignore we checked above it was null!
  weight = JSON.parse(localStorage.getItem("weight"));
}
else{
  weight.pop()
}
