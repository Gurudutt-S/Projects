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
import { CompanyListComponent } from './company-list/company-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { CompareCompanyComponent } from './compare-company/compare-company.component';
import { CompareSectorsComponent } from './compare-sectors/compare-sectors.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'sign_up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-page', component: UserLandingPageComponent },
  { path: 'compare-company', component: CompareCompanyComponent },
  { path: 'compare-sectors', component: CompareSectorsComponent },
  { path: 'users', component: MemberComponent },
  { path: 'admin', component: AdminLandingPageComponent },
  { path: 'update-user', component: UpdateUserComponent },
  { path: 'import-data', component: DocumentUploadComponent },
  { path: 'manage-company', component: CompanyListComponent },
  { path: 'add-company', component: CreateNewCompanyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
