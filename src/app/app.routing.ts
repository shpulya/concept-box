import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {UserProfileComponent} from './user-profile';
import {IdeaComponent} from './idea/index';
import {MainPageComponent} from './main-page';
import {IdeaDetailComponent} from './idea-detail';
import {UserIdeasComponent} from './user-ideas';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user-profile/:userId', component: UserProfileComponent},
    { path: 'idea', component: IdeaComponent},
    { path: 'main-page', component: MainPageComponent},
    { path: 'main-page/:tagId', component: MainPageComponent},
    { path: 'idea-detail/:id', component: IdeaDetailComponent},
    { path:"user-ideas/:userId", component: UserIdeasComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
