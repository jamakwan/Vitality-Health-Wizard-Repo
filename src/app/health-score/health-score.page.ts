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
  height: number[] = [-1];
  weight: number[] = [-1];
  sleepRecommendation: string = "";
  exerciseRecommendation: string = "";
  foodRecommendation: string = "";
  VitalityScore: number = 100;
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

    if(localStorage.getItem("height") != null){
      // @ts-ignore we checked above it was null!
      this.height = JSON.parse(localStorage.getItem("height"));
    }
    else{
      this.height.pop();
    }

    if(localStorage.getItem("weight") != null){
      // @ts-ignore we checked above it was null!
      this.weight = JSON.parse(localStorage.getItem("sleweightep"));
    }
    else{
      this.weight.pop();
    }

    if(this.sleep != null && this.sleep.length >= 7){
        var sum = 0;
        var mean = 0;
        for(var i = this.sleep.length - 1; i > this.sleep.length - 7; i--)
        {
          sum += this.sleep[i];
        }
        mean = sum / 7;
        
        if(mean >= 8 && mean <= 12){
          this.sleepRecommendation = "You're sleep log look's great! Here's a benefit of sleeping well:\n" + goodSleep[Math.floor(Math.random() * goodSleep.length)];
      
        }
        else if(mean < 8){
          this.sleepRecommendation = "You are not sleeping enough. Here's a reccomendation to increase your sleep :\n" + badSleep[Math.floor(Math.random() * badSleep.length)];
          this.VitalityScore -= 33;
        }
        else{
          this.sleepRecommendation = "You are sleeping a little too Much. Here's a reccomendation to have a healthier sleep log:\n" + badSleep[Math.floor(Math.random() * badSleep.length)];
          this.VitalityScore -= 33;
          
        }
    }
    else{
      this.sleepRecommendation = notEnoughEntries;
    }
    if(this.calsBurned != null && this.calsBurned.length > 0){
      
      if(this.calsBurned[this.calsBurned.length -1] >= 300){
        this.foodRecommendation = "Your caloric intake look's Great. Here's a benefit: " + goodEating[Math.floor(Math.random() * goodEating.length)];
      }
      else{

        this.foodRecommendation = "You're caloric intake could use some improvement. Be careful, here's a recomendation: " + badEating[Math.floor(Math.random() * badEating.length)];
        this.VitalityScore -= 33;
      }
      
    }
    else{
      this.foodRecommendation = notEnoughEntries;
    }
    if(this.weight != null && this.height != null && this.calsBurned != null && this.cals != null && this.calsBurned.length > 0){
      // 66 + (6.23 × weight in pounds) + (12.7 × height in inches) 
      var bmr = 66 + (6.23*this.weight[this.weight.length - 1])+(12.7*this.weight[this.height.length - 1]);
      if(bmr + this.calsBurned[this.calsBurned.length - 1] <= this.cals[this.cals.length - 1]){
        this.exerciseRecommendation = "You are doing well with excercise. Here's a benefit of being active :\n" + goodExercise[Math.floor(Math.random() * goodEating.length)];
      }
      else{
        this.exerciseRecommendation = "You could use more excercise. Here's a reccomendation to live a more active lifestyle :\n" + badExercise[Math.floor(Math.random() * badExercise.length)];
        this.VitalityScore -= 33;
      }     
    }
    else{
      this.exerciseRecommendation = notEnoughEntries
    }
  }
  
//BMR FORMULA: 66 + (6.23 × weight in pounds) + (12.7 × height in inches) 
//goodEating formula: BMR + Exercise <= calories eaten.
}

const notEnoughEntries = "Sorry, Please Input More Data To Get Info!"

const goodSleep = ["Improved Cognitive Function", "Enhanced Mood & Well-Being", "Increase Productivity & Performance", "Strengthened Immune System",
                    "Better Physical Health", "Improved Metabolism & Weight Management", "Enhanced Athletic Performance", "Reduced Stress Levels", 
                    "Lower Risk of Mental Health Disorders", "Improved Longevity"];
const goodExercise = ["Improved Cardiovascular Health", "Weight Management", "Increased Energy Levels", "Stronger Muscle & Bones", 
                      "Improved Flexibility & Mobility", "Reduced Risk of Chronic Diseases", "Better Sleep Quality", "Enhanced Cognitive Function", 
                      "Increased Longevity", "Enhanced Mood & Mental Well-Being"];
const goodEating = ["Better Skin Health", "Improved Longevity", "Enhanced Organ Health", "Improved Mental Health", "Stronger Immune System", "Improved Digestion",
                    "Weight Management", "Increased Energy Levels", "Reduced Risk of Chronic Diseases", "Stronger Bones & Teeth"];


                    
const badSleep = ["Establish a Consistent Sleep Schedule","Create a Bedtime Routine", "Make Your Bedroom Sleep-Friendly", "Limit Exposure to Screens Before Bed",
                  "Avoid Stimulants", "Exercise Regularly", "Manage Stress", "Create a Comfortable Sleep Environment", "Avoid Napping Late in the Day", "Consider Seeking Professional Help"];
const badExercise = ["Start with Small Goals", "Find Activities you Enjoy", "Schedule Exercise Into your Day", "Make it Social", "Set Realistic Expectations",
                    "Break it up into Chunks", "Explore Home Workouts", "Incorporate Physical Activity into your Daily Routine", "Seek Professional Guidance", "Focus on Consistency, not Intensity"];
const badEating = ["Increase Fruit and Vegetable Intake", "Choose Whole Grains", "Limit Processed Foods", "Control Portion Sizes", "Reduce Added Sugars", "Drink Plenty of Water",
                    "Include Lean Protein Sources", "Decrease Saturated and Trans Fats", "Plan and Prepare Meals", "Seek Professional Guidance"];
