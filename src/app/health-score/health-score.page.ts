import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-score',
  templateUrl: './health-score.page.html',
  styleUrls: ['./health-score.page.scss'],
})
export class HealthScorePage implements OnInit {

  cals: number[] = [-1];
  calsBurned: number[] = [-1];
  sleep: number[] = [-1];

  constructor() {
  }

  ngOnInit() {
    if(localStorage.getItem("cals") != null){
      // @ts-ignore we checked above it was null!
      this.cals = JSON.parse(localStorage.getItem("cals"));
    }
    else{
      this.cals.pop();
    }
    
    if(localStorage.getItem("calsBurned") != null){
      // @ts-ignore we checked above it was null!
      this.calsBurned = JSON.parse(localStorage.getItem("calsBurned"));
    }
    else{
      this.calsBurned.pop();
    }
    
    if(localStorage.getItem("sleep") != null){
      // @ts-ignore we checked above it was null!
      this.sleep = JSON.parse(localStorage.getItem("sleep"));
    }
    else{
      this.sleep.pop();
    }
    
  }

}