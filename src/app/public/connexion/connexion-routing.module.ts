import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LogoutFormComponent } from './logout-form/logout-form.component';


const routes: Routes = [
  { path: 'connexion-inscription',
  loadChildren: () => import('../connexion/connexion.module').then(m => m.ConnexionModule)
  },
  { path: 'inscription', component: SignupFormComponent },
  { path: 'connexion', component: LoginFormComponent },
  { path: 'deconnexion', component: LogoutFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnexionRoutingModule { }
