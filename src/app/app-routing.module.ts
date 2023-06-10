import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sleep-tracker',
    loadChildren: () => import('./sleep-tracker/sleep-tracker.module').then( m => m.SleepTrackerPageModule)
  },
  {
    path: 'food-logger',
    loadChildren: () => import('./food-logger/food-logger.module').then( m => m.FoodLoggerPageModule)
  },
  {
    path: 'exercise-logger',
    loadChildren: () => import('./exercise-logger/exercise-logger.module').then( m => m.ExerciseLoggerPageModule)
  },
  {
    path: 'food-logger',
    loadChildren: () => import('./food-logger/food-logger.module').then( m => m.FoodLoggerPageModule)
  },
  {
    path: 'bmi-calc',
    loadChildren: () => import('./bmi-calc/bmi-calc.module').then( m => m.BmiCalcPageModule)
  },
  {
    path: 'health-score',
    loadChildren: () => import('./health-score/health-score.module').then( m => m.HealthScorePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
