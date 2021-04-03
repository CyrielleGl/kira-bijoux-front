import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProtectedRoutingModule } from './protected-routing.module';

import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    UserModule,
    AdminModule
  ]
})
export class ProtectedModule { }
