import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { BoutiqueComponent } from './boutique/boutique.component';

import { ConditionsRetourComponent } from './conditions-retour/conditions-retour.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';

import {
  KiraBoRoute,
  KiraColliersRoute,
  KiraBraceletsRoute,
  KiraNouveautesRoute
} from './boutique/boutique-routing.module';

const routes: Routes = [
  KiraBoRoute,
  KiraColliersRoute,
  KiraBraceletsRoute,
  KiraNouveautesRoute,
  { path: 'a-propos', component: AProposComponent },
  { path: 'boutique', component: BoutiqueComponent },
  { path: 'connexion-inscription', component: ConnexionComponent },
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
