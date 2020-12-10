import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntretienBijouxComponent } from './entretien-bijoux/entretien-bijoux.component';
import { LaMarqueComponent } from './la-marque/la-marque.component';

const routes: Routes = [
  { path: 'entretien-bijoux', component: EntretienBijouxComponent },
  { path: 'la-marque', component: LaMarqueComponent },
  { path: 'lithotherapie',
    loadChildren: () => import('./lithotherapie/lithotherapie.module').then(m => m.LithotherapieModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AProposRouterModule { }
