import { NgModule } from '@angular/core';
import { ConnexionComponent } from './connexion.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConnexionRoutingModule } from './connexion-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ConnexionComponent
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
