import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from './connexion.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';



@NgModule({
  declarations: [ConnexionComponent, LoginFormComponent, SignupFormComponent],
  imports: [
    CommonModule
  ]
})
export class ConnexionModule { }
