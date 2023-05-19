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
