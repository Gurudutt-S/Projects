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
    UpdateUserComponent
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
