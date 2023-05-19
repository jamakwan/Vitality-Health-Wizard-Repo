import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseLoggerPageRoutingModule } from './exercise-logger-routing.module';

import { ExerciseLoggerPage } from './exercise-logger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseLoggerPageRoutingModule
  ],
  declarations: [ExerciseLoggerPage]
})
export class ExerciseLoggerPageModule {}
