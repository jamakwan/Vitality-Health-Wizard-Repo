import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmiCalcPage } from './bmi-calc.page';

const routes: Routes = [
  {
    path: '',
    component: BmiCalcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmiCalcPageRoutingModule {}
