import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdressesComponent } from './adresses/adresses.component';
import { GeneralComponent } from './general/general.component';
import { PaiementComponent } from './paiement/paiement.component';
import { SecuriteComponent } from './securite/securite.component';

const routes: Routes = [
  { path: 'mon-compte/informations/adresses', component: AdressesComponent },
  { path: 'mon-compte/informations/general', component: GeneralComponent },
  { path: 'mon-compte/informations/paiement', component: PaiementComponent },
  { path: 'mon-compte/informations/securite', component: SecuriteComponent },
  { path: 'mon-compte/informations',
  loadChildren: () => import('../informations/informations.module').then(m => m.InformationsModule)
  }
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationsRoutingModule { }
