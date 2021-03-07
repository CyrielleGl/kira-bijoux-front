import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { BoutiqueComponent } from './boutique.component';
import { BoutiqueRoutingModule } from './boutique-routing.module';
import { PanierComponent } from './panier/panier.component';
import { ItemsComponent } from 'src/app/shared/components/items/items.component';
import { ItemDetailsComponent } from './../../shared/components/item-details/item-details.component';

@NgModule({
  declarations: [
    BoutiqueComponent,
    ItemsComponent,
    ItemDetailsComponent,
    PanierComponent
  ],
  imports: [
    SharedModule,
    BoutiqueRoutingModule
  ]
})
export class BoutiqueModule { }
