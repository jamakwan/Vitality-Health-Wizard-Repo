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
  breakfastCals : Number;
  lunchCals : Number;
  submitHidden : boolean = true;
  lunchCardHidden : boolean = true;
  dinnerCardHidden : boolean = true;
  dinnerCals : Number;

  constructor() {
    this.breakfastCals = new Number();
    this.lunchCals = new Number();
    this.dinnerCals = new Number();
   }

  ngOnInit() {
    
  }


  logBreakfast(){
    this.hideBreakfast = true;
    this.hideLunch = true;
    this.hideDinner = true;
    this.breakfastCardHidden = false;
    this.submitHidden = false;
  }

  logLunch(){
    this.hideBreakfast = true;
    this.hideLunch = true;
    this.hideDinner = true;
    this.lunchCardHidden = false;
    this.submitHidden = false;

  }

  logDinner(){
    this.hideBreakfast = true;
    this.hideLunch = true;
    this.hideDinner = true;
    this.dinnerCardHidden = false;
    this.submitHidden = false;
  }

  reset()
  {
    this.hideBreakfast = false;
    this.hideLunch = false;
    this.hideDinner = false;
    this.breakfastCardHidden = true;
    this.breakfastCals = new Number();
    this.lunchCals = new Number();
    this.submitHidden = true;
    this.lunchCardHidden = true;
    this.dinnerCardHidden = true;
    this.dinnerCals = new Number();
  }

}
