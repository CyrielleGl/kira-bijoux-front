import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { BoutiqueComponent } from './boutique.component';
import { ColliersComponent } from './colliers/colliers.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { BouclesOreillesComponent } from './boucles-oreilles/boucles-oreilles.component';
import { BoutiqueRoutingModule } from './boutique-routing.module';
import { PanierComponent } from './panier/panier.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';
import { ItemsComponent } from 'src/app/shared/components/items/items.component';

@NgModule({
  declarations: [
    BoutiqueComponent,
    BouclesOreillesComponent,
    BraceletsComponent,
    ColliersComponent,
    ItemsComponent,
    PanierComponent,
    NouveautesComponent
  ],
  imports: [
    SharedModule,
    BoutiqueRoutingModule
  ]
})
export class BoutiqueModule { }
