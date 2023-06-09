import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-score',
  templateUrl: './health-score.page.html',
  styleUrls: ['./health-score.page.scss'],
})
export class HealthScorePage implements OnInit {

  constructor() { }

  ngOnInit() {
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
var calsBurned = [-1];
if(localStorage.getItem("calsBurned") != null){
  // @ts-ignore we checked above it was null!
  calsBurned = JSON.parse(localStorage.getItem("calsBurned"));
}
else{
  calsBurned.pop();
}
var sleep = [-1];
if(localStorage.getItem("sleep") != null){
  // @ts-ignore we checked above it was null!
  cals = JSON.parse(localStorage.getItem("sleep"));
}
else{
  sleep.pop();
}
