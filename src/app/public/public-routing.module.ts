import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConditionsRetourComponent } from './conditions-retour/conditions-retour.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LoginFormComponent } from './connexion/login-form/login-form.component';
import { SignupFormComponent } from './connexion/signup-form/signup-form.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';


const routes: Routes = [
  { path: 'a-propos',
    loadChildren: () => import('./a-propos/a-propos.module').then(m => m.AProposModule)
  },
  { path: 'boutique',
    loadChildren: () => import('./boutique/boutique.module').then(m => m.BoutiqueModule)
  },

  { path: 'conditions-retour', component: ConditionsRetourComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'livraison', component: LivraisonComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },

  { path: 'connexion', component: ConnexionComponent },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'signup-form', component: SignupFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
