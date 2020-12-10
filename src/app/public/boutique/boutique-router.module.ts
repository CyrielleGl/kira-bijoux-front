import { NgModule } from '@angular/core';
import { BouclesOreillesComponent } from './boucles-oreilles/boucles-oreilles.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { RouterModule, Routes } from '@angular/router';
import { ColliersComponent } from './colliers/colliers.component';
import { PanierComponent } from './panier/panier.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';

const routes: Routes = [
  { path: 'boucles-oreilles', component: BouclesOreillesComponent },
  { path: 'bracelets', component: BraceletsComponent },
  { path: 'colliers', component: ColliersComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'nouveautes', component: NouveautesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoutiqueRouterModule { }
