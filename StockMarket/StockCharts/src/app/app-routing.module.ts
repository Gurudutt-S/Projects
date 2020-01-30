import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { CreateNewCompanyComponent } from './create-new-company/create-new-company.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign_up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: MemberComponent },
  { path: 'admin', component: AdminLandingPageComponent },
  { path: 'update-user', component: UpdateUserComponent },
  { path: 'import-data', component: DocumentUploadComponent },
  { path: 'manage-company', component: CreateNewCompanyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
