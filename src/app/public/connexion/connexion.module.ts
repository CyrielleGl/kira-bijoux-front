import { NgModule } from '@angular/core';
import { ConnexionComponent } from './connexion.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConnexionRoutingModule } from './connexion-routing.module';



@NgModule({
  declarations: [
    ConnexionComponent,
    LoginFormComponent,
    SignupFormComponent
  ],
  imports: [
    SharedModule,
    ConnexionRoutingModule
  ]
})
export class ConnexionModule { }
