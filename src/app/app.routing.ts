import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {UserProfileComponent} from './user-profile';
import {IdeaComponent} from './idea/index';
import {MainPageComponent} from './main-page';
import {IdeaDetailComponent} from './idea-detail';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user-profile', component: UserProfileComponent},
    { path: 'idea', component: IdeaComponent},
    { path: 'main-page', component: MainPageComponent},
    { path: 'idea-detail/:id', component: IdeaDetailComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
