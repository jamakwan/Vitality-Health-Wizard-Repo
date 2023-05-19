import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodLoggerPage } from './food-logger.page';

const routes: Routes = [
  {
    path: '',
    component: FoodLoggerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodLoggerPageRoutingModule {}
