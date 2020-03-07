import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
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
import { ManageExchangeComponent } from './manage-exchange/manage-exchange.component';
import { ManageIpoComponent } from './manage-ipo/manage-ipo.component';
import { AddStockExchangeComponent } from './add-stock-exchange/add-stock-exchange.component';
import { AddIpoComponent } from './add-ipo/add-ipo.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { UserIpoListComponent } from './user-ipo-list/user-ipo-list.component';
import { UpdateIpoComponent } from './update-ipo/update-ipo.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { UpdateExchangeComponent } from './update-exchange/update-exchange.component';
import { ManageStockPriceComponent } from './manage-stock-price/manage-stock-price.component';
import { AddStockPriceComponent } from './add-stock-price/add-stock-price.component';
import { UpdateStockPriceComponent } from './update-stock-price/update-stock-price.component';
import { ActivateComponent } from './activate/activate.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserCompanyComponent } from './user-company/user-company.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'sign_up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-user', component: LoginUserComponent },
  {
    path: 'user-page', component: UserLandingPageComponent, children: [
      { path: '', redirectTo: 'user-ipo-list', pathMatch: 'full' },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'user-ipo-list', component: UserIpoListComponent },
      { path: 'compare-company', component: CompareCompanyComponent },
      { path: 'compare-sectors', component: CompareSectorsComponent },
      { path: 'user-company', component: UserCompanyComponent }
    ]
  },
  {
    path: 'admin', component: AdminLandingPageComponent, children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: MemberComponent },
      { path: 'manage-exchange', component: ManageExchangeComponent },
      { path: 'manage-ipo', component: ManageIpoComponent },
      { path: 'manage-stockPrice', component: ManageStockPriceComponent },
      { path: 'manage-company', component: CompanyListComponent },
      { path: 'import-data', component: DocumentUploadComponent },
      { path: 'add-company', component: CreateNewCompanyComponent },
      { path: 'add-exchange', component: AddStockExchangeComponent },
      { path: 'add-ipo', component: AddIpoComponent },
      { path: 'add-stockPrice', component: AddStockPriceComponent },
      { path: 'update-user', component: UpdateUserComponent }
    ]
  },
  { path: 'update-ipo', component: UpdateIpoComponent },
  { path: 'update-company', component: UpdateCompanyComponent },
  { path: 'update-exchange', component: UpdateExchangeComponent },
  { path: 'update-stockPrice', component: UpdateStockPriceComponent },

  { path: 'activate', component: ActivateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
