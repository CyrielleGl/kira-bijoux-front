import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';


export const ConnexionInscriptionroute: Route = {
  path: 'connexion-inscription',
  loadChildren: () => import('../connexion/connexion.module').then(m => m.ConnexionModule)
};

export const InscriptionRoute: Route = {
  path: 'inscription',
  component: SignupFormComponent
};

export const ConnexionRoute: Route = {
  path: 'connexion',
  component: LoginFormComponent
};


@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class ConnexionRoutingModule { }
