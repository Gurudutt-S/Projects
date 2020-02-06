import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { MemberComponent } from './member/member.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateNewCompanyComponent } from './create-new-company/create-new-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CompareCompanyComponent } from './compare-company/compare-company.component';
import { CompareSectorsComponent } from './compare-sectors/compare-sectors.component';
import { ManageExchangeComponent } from './manage-exchange/manage-exchange.component';
import { ManageIpoComponent } from './manage-ipo/manage-ipo.component';
import { AddStockExchangeComponent } from './add-stock-exchange/add-stock-exchange.component';
import { AddIpoComponent } from './add-ipo/add-ipo.component';
import { LoginUserComponent } from './login-user/login-user.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    LoginComponent,
    AdminLandingPageComponent,
    UserLandingPageComponent,
    DocumentUploadComponent,
    MemberComponent,
    UpdateUserComponent,
    CreateNewCompanyComponent,
    CompanyListComponent,
    ContactUsComponent,
    AboutUsComponent,
    CompareCompanyComponent,
    CompareSectorsComponent,
    ManageExchangeComponent,
    ManageIpoComponent,
    AddStockExchangeComponent,
    AddIpoComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
