import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../../app/shared/shared.module';

import { HomeComponent } from './home/home.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { ContactComponent } from './contact/contact.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { ConditionsRetourComponent } from './conditions-retour/conditions-retour.component';

import { BoutiqueModule } from './boutique/boutique.module';
import { AProposModule } from './a-propos/a-propos.module';
import { ConnexionModule } from './connexion/connexion.module';

@NgModule({
  declarations: [
    HomeComponent,
    MentionsLegalesComponent,
    ContactComponent,
    LivraisonComponent,
    ConditionsRetourComponent,
  ],
  imports: [
    SharedModule,
    PublicRoutingModule,
    BoutiqueModule,
    AProposModule,
    ConnexionModule
  ]
})
export class PublicModule { }
