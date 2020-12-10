import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { BoutiqueComponent } from './boutique.component';
import { ColliersComponent } from './colliers/colliers.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { BouclesOreillesComponent } from './boucles-oreilles/boucles-oreilles.component';
import { BoutiqueRouterModule } from './boutique-router.module';
import { PanierComponent } from './panier/panier.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';


@NgModule({
  declarations: [
    BoutiqueComponent,
    BouclesOreillesComponent,
    BraceletsComponent,
    ColliersComponent,
    PanierComponent,
    NouveautesComponent
  ],
  imports: [
    SharedModule,
    BoutiqueRouterModule
  ]
})
export class BoutiqueModule { }
