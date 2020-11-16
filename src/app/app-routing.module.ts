import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandesComponent } from './protected/user/commandes/commandes.component';
import { FavorisComponent } from './protected/user/favoris/favoris.component';
import { InformationsComponent } from './protected/user/informations/informations.component';
import { PanierComponent } from './public/panier/panier.component';
import { UserComponent } from './protected/user/user.component';
import { AProposComponent } from './public/a-propos/a-propos.component';
import { EntretienBijouxComponent } from './public/a-propos/entretien-bijoux/entretien-bijoux.component';
import { LaMarqueComponent } from './public/a-propos/la-marque/la-marque.component';
import { BaguesComponent } from './public/bijoux/bagues/bagues.component';
import { BijouxComponent } from './public/bijoux/bijoux.component';
import { BouclesOreillesComponent } from './public/bijoux/boucles-oreilles/boucles-oreilles.component';
import { BraceletsComponent } from './public/bijoux/bracelets/bracelets.component';
import { ColliersComponent } from './public/bijoux/colliers/colliers.component';
import { ConditionsRetourComponent } from './public/conditions-retour/conditions-retour.component';
import { ConnexionComponent } from './public/connexion/connexion.component';
import { LoginFormComponent } from './public/connexion/login-form/login-form.component';
import { SignupFormComponent } from './public/connexion/signup-form/signup-form.component';
import { ContactComponent } from './public/contact/contact.component';
import { HomeComponent } from './public/home/home.component';
import { LivraisonComponent } from './public/livraison/livraison.component';
import { MentionsLegalesComponent } from './public/mentions-legales/mentions-legales.component';
import { NouveautesComponent } from './public/nouveautes/nouveautes.component';
import { AdminComponent } from './protected/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'a-propos', component: AProposComponent },
  { path: 'entretien-bijoux', component: EntretienBijouxComponent },
  { path: 'la-marque', component: LaMarqueComponent },

  { path: 'bijoux', component: BijouxComponent },
  { path: 'bagues', component: BaguesComponent },
  { path: 'boucles-oreilles', component: BouclesOreillesComponent },
  { path: 'bracelets', component: BraceletsComponent },
  { path: 'colliers', component: ColliersComponent },

  { path: 'conditions-retour', component: ConditionsRetourComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'livraison', component: LivraisonComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'nouveautes', component: NouveautesComponent },

  { path: 'connexion', component: ConnexionComponent },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'signup-form', component: SignupFormComponent },

  { path: 'user', component: UserComponent },
  { path: 'commandes', component: CommandesComponent },
  { path: 'favoris', component: FavorisComponent },
  { path: 'informations', component: InformationsComponent },
  { path: 'panier', component: PanierComponent },

  { path: 'admin', component: AdminComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
