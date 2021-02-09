import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConditionsRetourComponent } from './conditions-retour/conditions-retour.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';

import {
  KiraBoRoute,
  KiraColliersRoute,
  KiraBraceletsRoute,
  KiraNouveautesRoute,
  KiraPanierRoute,
  ItemDetailsRoute
} from './boutique/boutique-routing.module';
import {
  KiraEntretienBijouxRoute,
  KiraLaMarqueRoute,
  KiraLithotherapieRoute
} from './a-propos/a-propos-routing.module';
import {
  ConnexionInscriptionroute,
  ConnexionRoute,
  DeconnexionRoute,
  InscriptionRoute,
} from './connexion/connexion-routing.module';

const routes: Routes = [
  KiraBoRoute,
  KiraColliersRoute,
  KiraBraceletsRoute,
  KiraNouveautesRoute,
  ItemDetailsRoute,
  KiraPanierRoute,
  KiraEntretienBijouxRoute,
  KiraLaMarqueRoute,
  KiraLithotherapieRoute,
  ConnexionInscriptionroute,
  ConnexionRoute,
  InscriptionRoute,
  DeconnexionRoute,
  { path: 'conditions-retour', component: ConditionsRetourComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'livraison', component: LivraisonComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
