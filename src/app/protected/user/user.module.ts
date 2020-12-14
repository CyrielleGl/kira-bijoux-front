import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { UserRoutingModule } from './user-routing.module';
import { InformationsComponent } from './informations/informations.component';
import { CommandesComponent } from './commandes/commandes.component';
import { FavorisComponent } from './favoris/favoris.component';
import { UserComponent } from './user.component';
import { InformationsModule } from './informations/informations.module';


@NgModule({
  declarations: [
    InformationsComponent,
    CommandesComponent,
    FavorisComponent,
    UserComponent
  ],

  imports: [
    SharedModule,
    UserRoutingModule,
    InformationsModule
  ]
})
export class UserModule { }
