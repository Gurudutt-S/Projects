import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { MemberComponent } from './member/member.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { UserIpoListComponent } from './user-ipo-list/user-ipo-list.component';
import { UpdateIpoComponent } from './update-ipo/update-ipo.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { UpdateExchangeComponent } from './update-exchange/update-exchange.component';
import { AddStockPriceComponent } from './add-stock-price/add-stock-price.component';
import { ManageStockPriceComponent } from './manage-stock-price/manage-stock-price.component';
import { UpdateStockPriceComponent } from './update-stock-price/update-stock-price.component';
import { ActivateComponent } from './activate/activate.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserCompanyComponent } from './user-company/user-company.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyChartComponent } from './company-chart/company-chart.component';

import { HighchartsChartComponent } from 'highcharts-angular';
import { SectorChartComponent } from './sector-chart/sector-chart.component';
import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { HttpInterceptorService } from './services/http-interceptor.service';


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
    UserIpoListComponent,
    UpdateIpoComponent,
    UpdateCompanyComponent,
    UpdateExchangeComponent,
    AddStockPriceComponent,
    ManageStockPriceComponent,
    UpdateStockPriceComponent,
    ActivateComponent,
    UserProfileComponent,
    UserCompanyComponent,
    CompanyChartComponent,
    HighchartsChartComponent,
    SectorChartComponent,
    UpdateUserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
