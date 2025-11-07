import { Routes } from '@angular/router';
import { Aula01 } from './pages/aula01/aula01';
import { Aula02 } from './pages/aula02/aula02';
import { Aula03 } from './pages/aula03/aula03';
/* import { Wellcome } from './pages/wellcome/wellcome'; */
 
export const routes: Routes = [
  { path: '', redirectTo: 'aula03', pathMatch: 'full' },
  { path: 'aula01', component: Aula01 },
  { path: 'aula02', component: Aula02 },
  { path: 'aula03', component: Aula03 },
  // { path: 'Wellcome', loadComponent: () => import('./pages/wellcome/wellcome').then(c => c.Wellcome)},
  // { path: 'Wellcome', component: Wellcome},
 
  { path: '**', component: Aula01 },
];