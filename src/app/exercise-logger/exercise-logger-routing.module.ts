import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseLoggerPage } from './exercise-logger.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseLoggerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseLoggerPageRoutingModule {}
