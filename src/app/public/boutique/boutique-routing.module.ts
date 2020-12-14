import { NgModule } from '@angular/core';
import { BouclesOreillesComponent } from './boucles-oreilles/boucles-oreilles.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { RouterModule, Routes } from '@angular/router';
import { ColliersComponent } from './colliers/colliers.component';
import { PanierComponent } from './panier/panier.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';

const routes: Routes = [
  { path: 'boutique',
  loadChildren: () => import('../boutique/boutique.module').then(m => m.BoutiqueModule)
  },
  { path: 'boutique/boucles-oreilles', component: BouclesOreillesComponent },
  { path: 'boutique/bracelets', component: BraceletsComponent },
  { path: 'boutique/colliers', component: ColliersComponent },
  { path: 'boutique/panier', component: PanierComponent },
  { path: 'boutique/nouveautes', component: NouveautesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoutiqueRoutingModule { }
