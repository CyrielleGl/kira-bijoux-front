import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntretienBijouxComponent } from './entretien-bijoux/entretien-bijoux.component';
import { LaMarqueComponent } from './la-marque/la-marque.component';
import { LithotherapieComponent } from './lithotherapie/lithotherapie.component';

const routes: Routes = [
  { path: 'a-propos',
  loadChildren: () => import('../a-propos/a-propos.module').then(m => m.AProposModule)
  },
  { path: 'a-propos/entretien-bijoux', component: EntretienBijouxComponent },
  { path: 'a-propos/la-marque', component: LaMarqueComponent },
  { path: 'lithotherapie', component: LithotherapieComponent },
  { path: 'lithotherapie',
    loadChildren: () => import('./lithotherapie/lithotherapie.module').then(m => m.LithotherapieModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AProposRouterModule { }
