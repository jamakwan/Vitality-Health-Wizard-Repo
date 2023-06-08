import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthScorePage } from './health-score.page';

const routes: Routes = [
  {
    path: '',
    component: HealthScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthScorePageRoutingModule {}
