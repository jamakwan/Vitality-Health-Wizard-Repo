import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodLoggerPageRoutingModule } from './food-logger-routing.module';

import { FoodLoggerPage } from './food-logger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodLoggerPageRoutingModule
  ],
  declarations: [FoodLoggerPage]
})
export class FoodLoggerPageModule {}
