import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmiCalcPageRoutingModule } from './bmi-calc-routing.module';

import { BmiCalcPage } from './bmi-calc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmiCalcPageRoutingModule
  ],
  declarations: [BmiCalcPage]
})
export class BmiCalcPageModule {
}
