import { NgModule } from '@angular/core';
import { ConnexionComponent } from './connexion.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConnexionRoutingModule } from './connexion-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ConnexionComponent,
    LoginFormComponent,
    SignupFormComponent
  ],
  imports: [
    SharedModule,
    ConnexionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  providers: [
    CookieService
  ]
})
export class ConnexionModule { }
