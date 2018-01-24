import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { NgxCarouselModule } from 'ngx-carousel';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';

import {
    GalleryComponent,
    CarouselComponent,
    HeroHomeComponent,
    ListOfBodComponent,
    MobileAppDownloadComponent,
    OurServicesComponent,
    UpcomingEventsComponent
} from './index';


@NgModule({
    imports: [
        SharedModule,
        NgxCarouselModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        GalleryComponent,
        CarouselComponent,
        HeroHomeComponent,
        ListOfBodComponent,
        MobileAppDownloadComponent,
        OurServicesComponent,
        UpcomingEventsComponent
    ],
    exports: [
        HomeComponent,
        GalleryComponent,
        CarouselComponent,
        HeroHomeComponent,
        ListOfBodComponent,
        MobileAppDownloadComponent,
        OurServicesComponent,
        UpcomingEventsComponent
    ],
    providers: []
})

export class HomeModule { }
