import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
var sleep = [-1, -1, -1, -1, -1, -1, -1];
if(localStorage.getItem("sleep") != null){
  // @ts-ignore we checked above it was null!
  sleep = JSON.parse(localStorage.getItem("sleep"));
}

function setRecommendation(){
  let num_not_entered = 0;
  let total = 0;
  for(let i=0; i<sleep.length; i++){
    if(sleep[i] == -1){
      num_not_entered += 1
    }
    else{
      total += sleep[i]
    }
  }
  if(num_not_entered > 4){
    // @ts-ignore
    document.getElementById('recommendation').innerHTML = 'You must enter sleep data for at least three' +
      ' days in the past week to receive a recommendation.';
  }
  else{
    let num_entered = 7- num_not_entered;
    if(total/num_entered > 8){
      // @ts-ignore
      document.getElementById('recommendation').innerHTML = 'Good job getting sleep this week! Keep getting 8 hours a night!';
    }
    else{
      // @ts-ignore
      document.getElementById('recommendation').innerHTML = "You haven't been sleeping enough this week. Try to get 9 hours tonight!";
    }

  }
}

setRecommendation();

@Component({
  selector: 'app-sleep-tracker',
  templateUrl: './sleep-tracker.page.html',
  styleUrls: ['./sleep-tracker.page.scss'],
})
export class SleepTrackerPage {
  startTime:Date;
  endTime:Date;
  entryCardHidden : boolean = true;
  entryTimeHidden : boolean = true;
  submitHidden : boolean = true;
  endCardHidden : boolean = true;
  endTimeHidden : boolean = true;
  confirmHidden : boolean = true;
  logSleepHidden : boolean = false;
  flag : number = 1; // is 1 if the dates aren't correct, else its a different value
  private date: any;

  constructor(public alertController:AlertController) {
    this.startTime = new Date();
    this.endTime = new Date();
  }

  ngOnInit() {
    console.log("loaded");
  }

  showEntryCard()
  {
    this.entryCardHidden = false;
    this.entryTimeHidden = false;
    this.submitHidden = false;
    this.logSleepHidden = true;
  }

  showEndCard()
  {
    this.entryCardHidden = true;
    this.entryTimeHidden = true;
    this.submitHidden = true;

    this.endCardHidden = false;
    this.endTimeHidden = false;
    this.confirmHidden = false;
  }


  reset()
  {

    this.validateInput();




    // @ts-ignore
    let hours = Math.abs(this.endTime - this.startTime) / (60*60*1000);
    var currentdate = new Date();
    // @ts-ignore
    let days_back = Math.round((currentdate - this.endTime)/(1000 * 3600 * 24));
    if (days_back < 7){
      sleep[days_back] = hours;
    }


    /*
    if(this.flag == 1)
    {
      localStorage.setItem(`SleepArr_${Math.random().toString(36).substring(2,8)}`,JSON.stringify([this.startTime,this.endTime]));
      find a way to store this information.
    }
    */
    console.log(this.startTime);
    console.log(this.endTime);
    this.startTime = new Date();
    this.endTime = new Date();
    this.entryCardHidden = true;
    this.entryTimeHidden = true;
    this.submitHidden = true;
    this.endCardHidden = true;
    this.endTimeHidden = true;
    this.confirmHidden = true;
    this.logSleepHidden = false;
    this.flag = 1;
  }

  async validateInput()
  {
    if(this.startTime >= this.endTime)
    {
        this.flag = 99;
        const alert = await this.alertController.create({
        header: 'Invalid Input',
        message: 'Please Fix Date Entry',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
