import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { AddUserComponent } from './user/add-user/add-user.component';


const routes: Routes = [
  {path:'Register' , component:RegisterComponent},
  {path:'addUser' , component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
