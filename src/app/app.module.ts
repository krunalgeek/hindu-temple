import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './shared/header/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './shared/header/sidenav/sidenav.component';
import { HeroHomeComponent } from './home/hero-home/hero-home.component';
import { BurgerMenuComponent } from './shared/burger-menu/burger-menu.component';
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
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HallRentalComponent } from './services/hall-rental/hall-rental.component';
import { DocorationsComponent } from './services/docorations/docorations.component';
import { AppRouting } from './app.router';
import { PriestServiceListComponent } from './services/priest/priest-service-list/priest-service-list.component';
import { SidenavService } from './shared/header/sidenav/sidenav.service';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormRequestComponent } from './contact-us/form-request/form-request.component';
import { SignupComponent } from './membership/signup/signup.component';
import { YourdetailFormsComponent } from './membership/signup/yourdetail-forms/yourdetail-forms.component';
import { YourfamilyFormsComponent } from './membership/signup/yourfamily-forms/yourfamily-forms.component';
import { MembershipPaymentFormsComponent } from './membership/signup/membership-payment-forms/membership-payment-forms.component';
import { PriestFormComponent } from './services/priest/priest-form/priest-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    HeroHomeComponent,
    BurgerMenuComponent,
    CarouselComponent,
    UpcomingEventsComponent,
    OurServicesComponent,
    GalleryComponent,
    ListOfBodComponent,
    MobileAppDownloadComponent,
    PriestComponent,
    FoodCateringComponent,
    NotFoundComponent,
    HallRentalComponent,
    DocorationsComponent,
    PriestServiceListComponent,
    AboutUsComponent,
    ContactUsComponent,
    FormRequestComponent,
    SignupComponent,
    YourdetailFormsComponent,
    YourfamilyFormsComponent,
    MembershipPaymentFormsComponent,
    PriestFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxCarouselModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [
    SidenavService,
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    PriestServiceListComponent
  ]
})
export class AppModule { }
