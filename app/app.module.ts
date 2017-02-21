import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './components/app.component';
import {LoginComponent} from "./components/login.component";
import {RegisterComponent} from "./components/register.component";
import {HomeComponent} from "./components/home.component";
import {NavbarComponent} from "./components/navbar.component";

//服务
import {HttpService} from "./services/http.service";
import {NewsComponent} from "./components/news.component";
import {VideoComponent} from "./components/video.component";
import {ActivesComponent} from "./components/active.component";
import {PlayersComponent} from "./components/players.component";
import {NewsInfoComponent} from "./components/news-info.component";

// 配置路由
const myRouter:Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "news-list",
        component: NewsComponent
    },
    {
        path: "news-list/:id",
        component: NewsInfoComponent
    },
    {
        path: "**",
        redirectTo: "home"
    }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        NavbarComponent,
        NewsComponent,
        VideoComponent,
        ActivesComponent,
        PlayersComponent,
        NewsInfoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(myRouter, {useHash: true})
    ],
    providers: [
        HttpService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
