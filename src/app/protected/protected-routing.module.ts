import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'mon-compte', component: UserComponent },
  { path: 'administration', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
