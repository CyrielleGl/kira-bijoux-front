import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../../app/shared/shared.module';

import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { ContactComponent } from './contact/contact.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { ConditionsRetourComponent } from './conditions-retour/conditions-retour.component';
import { BoutiqueModule } from './boutique/boutique.module';



@NgModule({
  declarations: [
    MentionsLegalesComponent,
    ContactComponent,
    LivraisonComponent,
    ConditionsRetourComponent,
  ],
  imports: [
    SharedModule,
    PublicRoutingModule,
    BoutiqueModule
  ]
})
export class PublicModule { }
