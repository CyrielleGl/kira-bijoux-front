import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { EntretienBijouxComponent } from './entretien-bijoux/entretien-bijoux.component';
import { LaMarqueComponent } from './la-marque/la-marque.component';
import { LithotherapieComponent } from './lithotherapie/lithotherapie.component';

export const AProposRoute: Route = {
  path: 'a-propos',
  loadChildren: () => import('../a-propos/a-propos.module').then(m => m.AProposModule)
};

export const KiraEntretienBijouxRoute: Route = {
  path: 'a-propos/entretien-bijoux',
  component: EntretienBijouxComponent
};

export const KiraLaMarqueRoute: Route = {
  path: 'a-propos/la-marque',
  component: LaMarqueComponent
};

export const KiraLithotherapieRoute: Route = {
  path: 'lithotherapie',
  component: LithotherapieComponent
};

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AProposRouterModule { }
