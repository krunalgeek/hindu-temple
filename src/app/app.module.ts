import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppRouting } from './app.router';
import { PriestServiceListComponent } from './services/priest/priest-service-list/priest-service-list.component';

import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';

import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { ServicesModule } from './services/services.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRouting,
    LayoutModule,
    HomeModule,
    AboutUsModule,
    ContactUsModule,
    ServicesModule,
    AuthModule
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
