import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroHomeComponent } from './home/hero-home/hero-home.component';

import { NgxCarouselModule } from 'ngx-carousel';
import { CarouselComponent } from './home/hero-home/carousel/carousel.component';
import { UpcomingEventsComponent } from './home/upcoming-events/upcoming-events.component';
import { OurServicesComponent } from './home/our-services/our-services.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { ListOfBodComponent } from './home/list-of-bod/list-of-bod.component';
import { MobileAppDownloadComponent } from './home/mobile-app-download/mobile-app-download.component';
import { PriestComponent } from './services/priest/priest.component';
import { FoodCateringComponent } from './services/food-catering/food-catering.component';
import { HallRentalComponent } from './services/hall-rental/hall-rental.component';
import { DocorationsComponent } from './services/docorations/docorations.component';
import { AppRouting } from './app.router';
import { PriestServiceListComponent } from './services/priest/priest-service-list/priest-service-list.component';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupComponent } from './membership/signup/signup.component';
import { YourdetailFormsComponent } from './membership/signup/yourdetail-forms/yourdetail-forms.component';
import { YourfamilyFormsComponent } from './membership/signup/yourfamily-forms/yourfamily-forms.component';
import { MembershipPaymentFormsComponent } from './membership/signup/membership-payment-forms/membership-payment-forms.component';
import { PriestFormComponent } from './services/priest/priest-form/priest-form.component';
import { HallRentalFormComponent } from './services/hall-rental/hall-rental-form/hall-rental-form.component';
import { ContactFormComponent } from './contact-us/contact-form/contact-form.component';
import { SigninComponent } from './membership/signin/signin.component';
import { SigninFormComponent } from './membership/signin/signin-form/signin-form.component';
import { AppetizersComponent } from './services/food-catering/appetizers/appetizers.component';
import { MainDisesComponent } from './services/food-catering/main-dises/main-dises.component';
import { FoodOrderComponent } from './services/food-catering/food-order/food-order.component';

import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroHomeComponent,
    CarouselComponent,
    UpcomingEventsComponent,
    OurServicesComponent,
    GalleryComponent,
    ListOfBodComponent,
    MobileAppDownloadComponent,
    PriestComponent,
    FoodCateringComponent,
    HallRentalComponent,
    DocorationsComponent,
    PriestServiceListComponent,
    AboutUsComponent,
    ContactUsComponent,
    SignupComponent,
    YourdetailFormsComponent,
    YourfamilyFormsComponent,
    MembershipPaymentFormsComponent,
    PriestFormComponent,
    HallRentalFormComponent,
    ContactFormComponent,
    SigninComponent,
    SigninFormComponent,
    AppetizersComponent,
    MainDisesComponent,
    FoodOrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxCarouselModule,
    HttpClientModule,
    AppRouting,
    LayoutModule
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
