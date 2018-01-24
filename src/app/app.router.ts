import { RouterModule } from '@angular/router';
import { PriestComponent } from './services/priest/priest.component';
import { FoodCateringComponent } from './services/food-catering/food-catering.component';
import { HallRentalComponent } from './services/hall-rental/hall-rental.component';
import { DocorationsComponent } from './services/docorations/docorations.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupComponent } from './membership/signup/signup.component';
import { SigninComponent } from './membership/signin/signin.component';
import { routerTransition } from './app.router.animations';

const appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'priest', component: PriestComponent, data: { state: 'priest' } },
    { path: 'food-catering', component: FoodCateringComponent, data: { state: 'food-catering' } },
    { path: 'hall-rental', component: HallRentalComponent, data: { state: 'hall-rental' } },
    { path: 'decorations', component: PriestComponent, data: { state: 'decorations' } },
    { path: 'sign-up', component: SignupComponent, data: { state: 'sign-up' } },
    { path: 'sign-in', component: SigninComponent, data: { state: 'sign-in' } },
    { path: '**', redirectTo: 'home' }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
    useHash: false,
    enableTracing: false
});
