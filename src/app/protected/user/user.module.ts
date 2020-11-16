import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationsComponent } from './informations/informations.component';
import { CommandesComponent } from './commandes/commandes.component';
import { PanierComponent } from './panier/panier.component';
import { FavorisComponent } from './favoris/favoris.component';
import { UserComponent } from './user.component';



@NgModule({
  declarations: [InformationsComponent, CommandesComponent, PanierComponent, FavorisComponent, UserComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
