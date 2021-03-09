import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'mon-compte',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'administration',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
