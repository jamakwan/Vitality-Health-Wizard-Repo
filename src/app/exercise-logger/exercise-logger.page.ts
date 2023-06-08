import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-logger',
  templateUrl: './exercise-logger.page.html',
  styleUrls: ['./exercise-logger.page.scss'],
})
export class ExerciseLoggerPage implements OnInit {
  cals:Number;
  entryCardHidden : boolean = true;
  entryCalsHidden : boolean = true;
  submitHidden : boolean = true;
  confirmHidden : boolean = true;
  logExerciseHidden : boolean = false;
  flag : number = 1; //is 1 if input valid idk

  constructor() { 
    this.cals = 0;
  }

  ngOnInit() {
  }

  showEntryCard() {
    this.entryCardHidden = false;
    this.entryCalsHidden = false;
    this.submitHidden = false;
    this.logExerciseHidden = true;
  }

  reset()
  {
    console.log(this.cals);
    this.cals = new Number();
    this.entryCardHidden = true;
    this.submitHidden = true;
    this.confirmHidden = true;
    this.logExerciseHidden = false;
    this.flag = 1;
    

  }

  logData()
  {
    
  }

}

