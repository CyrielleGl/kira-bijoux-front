import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationsComponent } from './informations/informations.component';
import { CommandesComponent } from './commandes/commandes.component';
import { PanierComponent } from './panier/panier.component';
import { FavorisComponent } from './favoris/favoris.component';



@NgModule({
  declarations: [InformationsComponent, CommandesComponent, PanierComponent, FavorisComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
