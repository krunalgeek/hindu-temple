import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';

import { AppRouting } from './app.router';
import { PriestServiceListComponent } from './services/priest/priest-service-list/priest-service-list.component';

import { SignupComponent } from './membership/signup/signup.component';
import { YourdetailFormsComponent } from './membership/signup/yourdetail-forms/yourdetail-forms.component';
import { YourfamilyFormsComponent } from './membership/signup/yourfamily-forms/yourfamily-forms.component';
import { MembershipPaymentFormsComponent } from './membership/signup/membership-payment-forms/membership-payment-forms.component';

import { SigninComponent } from './membership/signin/signin.component';
import { SigninFormComponent } from './membership/signin/signin-form/signin-form.component';

import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';

import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    YourdetailFormsComponent,
    YourfamilyFormsComponent,
    MembershipPaymentFormsComponent,
    SigninComponent,
    SigninFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRouting,
    LayoutModule,
    HomeModule,
    AboutUsModule,
    ContactUsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    PriestServiceListComponent
  ]
})
export class AppModule { }
