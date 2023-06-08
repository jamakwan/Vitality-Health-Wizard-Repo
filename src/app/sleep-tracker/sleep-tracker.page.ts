import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';

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
    let hours = Math.abs(new Date(this.endTime).getTime() - new Date(this.startTime).getTime()) / (60*60*1000);
    console.log(hours);
    sleep.push(hours);
    localStorage.setItem("sleep", JSON.stringify(sleep))

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
    recommendSleep();
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
var sleep = [-1];
if(localStorage.getItem("sleep") != null){
  // @ts-ignore we checked above it was null!
  sleep = JSON.parse(localStorage.getItem("sleep"));
}
else{
  sleep.pop()
}

console.log(sleep)
recommendSleep();
function recommendSleep(){

  if(sleep.length == 0){
    alert("Enter sleep data to receive a recommendation!")
    return;
  }

  let avg_hours = 0;
  let i = 0;
  let total = sleep.length;
  if (sleep.length > 7){
    i = sleep.length - 7;
    total = 7;
  }
  for (; i < sleep.length; i++) {
    avg_hours += sleep[i]
  }
  avg_hours = avg_hours/total;

  if(avg_hours >= 8 && avg_hours <= 10){
    alert("You've been sleeping " + avg_hours.toFixed(2) + " hours a day in the past " + total + " days. That's a health amount of sleep!");
  }
  else if(avg_hours > 10){
    alert("You've been sleeping " + avg_hours.toFixed(2) + " hours a day in the past " + total + " days. That's an unhealthy amount! Try not to sleep as much.");
  }
  else{
    alert("You've been sleeping " + avg_hours.toFixed(2) + " hours a day in the past " + total + " days. That's an unhealthy amount of sleep! Try to sleep more.");
  }
}
