import { Routes } from '@angular/router';
import { StrategyContainerComponent } from './core/components/strategy-container/strategy-container.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'strategy',
    pathMatch: 'full'
  },
  {
    path: 'strategy',
    component: StrategyContainerComponent
  }
];
