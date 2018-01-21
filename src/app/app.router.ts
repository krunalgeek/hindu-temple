import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PriestComponent } from './services/priest/priest.component';
import { FoodCateringComponent } from './services/food-catering/food-catering.component';
import { HallRentalComponent } from './services/hall-rental/hall-rental.component';
import { DocorationsComponent } from './services/docorations/docorations.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupComponent } from './membership/signup/signup.component';
import { SigninComponent } from './membership/signin/signin.component';
import { routerTransition } from './app.router.animations';

const appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { state: 'home' } },
    { path: 'priest', component: PriestComponent, data: { state: 'priest' } },
    { path: 'food-catering', component: PriestComponent, data: { state: 'food-catering' } },
    { path: 'hall-rental', component: HallRentalComponent, data: { state: 'hall-rental' } },
    { path: 'decorations', component: PriestComponent, data: { state: 'decorations' } },
    { path: 'about-us', component: AboutUsComponent, data: { state: 'about-us' } },
    { path: 'contact-us', component: ContactUsComponent, data: { state: 'contact-us' } },
    { path: 'sign-up', component: SignupComponent, data: { state: 'sign-up' } },
    { path: 'sign-in', component: SigninComponent, data: { state: 'sign-in' } },
    { path: '**', component: NotFoundComponent  }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
    useHash: true,
    enableTracing: false
});
