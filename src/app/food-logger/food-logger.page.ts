import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-logger',
  templateUrl: './food-logger.page.html',
  styleUrls: ['./food-logger.page.scss'],
})
export class FoodLoggerPage implements OnInit {
  hideBreakfast : boolean = false;
  hideLunch : boolean = false;
  hideDinner : boolean = false;
  breakfastCardHidden : boolean = true;
  breakfastCals : number;
  lunchCals : number;
  submitHidden : boolean = true;
  lunchCardHidden : boolean = true;
  dinnerCardHidden : boolean = true;
  dinnerCals : number;
  totalCals : number;

  constructor() {
    this.breakfastCals = 0;
    this.lunchCals = 0;
    this.dinnerCals = 0;
    this.totalCals = 0;
   }

  ngOnInit() {

  }


  logBreakfast(){
    this.hideBreakfast = true;
    this.hideLunch = true;
    this.hideDinner = true;
    this.breakfastCardHidden = false;
    this.submitHidden = false;
    this.totalCals += this.breakfastCals;
  }

  logLunch(){
    this.hideBreakfast = true;
    this.hideLunch = true;
    this.hideDinner = true;
    this.lunchCardHidden = false;
    this.submitHidden = false;
    this.totalCals += this.lunchCals;

  }

  logDinner(){
    this.hideBreakfast = true;
    this.hideLunch = true;
    this.hideDinner = true;
    this.dinnerCardHidden = false;
    this.submitHidden = false;
    this.totalCals += this.dinnerCals
    this.totalCals = 0;
  }

  resetNonDinner()
  {
    this.hideBreakfast = false;
    this.hideLunch = false;
    this.hideDinner = false;
    this.breakfastCardHidden = true;
    this.submitHidden = true;
    this.lunchCardHidden = true;
    this.dinnerCardHidden = true;
  }

  reset()
  {
    this.logData()
    this.hideBreakfast = false;
    this.hideLunch = false;
    this.hideDinner = false;
    this.breakfastCardHidden = true;
    this.breakfastCals = 0;
    this.lunchCals = 0;
    this.submitHidden = true;
    this.lunchCardHidden = true;
    this.dinnerCardHidden = true;
    this.dinnerCals = 0;
  }

  logData(){
    cals.push(this.lunchCals+this.breakfastCals+this.dinnerCals);
    localStorage.setItem("cals", JSON.stringify(cals));
  }

}

var cals = [-1];
if(localStorage.getItem("cals") != null){
  // @ts-ignore we checked above it was null!
  cals = JSON.parse(localStorage.getItem("cals"));
}
else{
  cals.pop();
}
