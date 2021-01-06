import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [{ path: '', component: UserDetailComponent },{
  path:'userlist', component:UserlistComponent},
  {path:'userlist/user-info/:userid',  component:UserInfoComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
