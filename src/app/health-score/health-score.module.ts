import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthScorePageRoutingModule } from './health-score-routing.module';

import { HealthScorePage } from './health-score.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthScorePageRoutingModule
  ],
  declarations: [HealthScorePage]
})
export class HealthScorePageModule {}
