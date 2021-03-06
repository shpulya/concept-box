﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers/index';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { EqualValidator } from './_directives/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import {AlertService, AuthenticationService, UserService, IdeaService, TagsService, PagerService} from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { UserProfileComponent } from './user-profile/index';
import { IdeaComponent } from './idea/index';
import {FilterPipe, MainPageComponent} from './main-page';
import {IdeaDetailComponent} from './idea-detail/index';
import {UserIdeasComponent} from './user-ideas';




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        EqualValidator,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        UserProfileComponent,
        IdeaComponent,
        MainPageComponent,
        IdeaDetailComponent,
        UserIdeasComponent,
        FilterPipe
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        PagerService,
        IdeaService,
        TagsService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }
        // provider used to create fake backend
   //     fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
