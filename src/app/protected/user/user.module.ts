import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { UserRoutingModule } from './user-routing.module';
import { InformationsComponent } from './informations/informations.component';
import { CommandesComponent } from './commandes/commandes.component';
import { FavorisComponent } from './favoris/favoris.component';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalUpdateInfosComponent } from './informations/modal-update-infos/modal-update-infos.component';
import { OrderCardDialogComponent } from './commandes/order-card-dialog/order-card-dialog.component';

@NgModule({
  declarations: [
    InformationsComponent,
    CommandesComponent,
    FavorisComponent,
    UserComponent,
    ModalUpdateInfosComponent,
    OrderCardDialogComponent,
  ],

  imports: [
    SharedModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
