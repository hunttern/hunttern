import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';
import { PackagesComponent } from './Components/packages/packages.component';
import { CardComponent } from './Components/packages/card/card.component';
import { ServicesComponent } from './Components/services/services.component';
import { FeaturesComponent } from './Components/features/features.component';
import { HomeComponent } from './Components/home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './Components/blog/blog.component';
import { NewsComponent } from './Components/blog/news/news.component';
import { NewscardComponent } from './Components/blog/newscard/newscard.component';
import { ArticleComponent } from './Components/article/article.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProfileComponent } from './Components/dashboard/profile/profile.component';
import { StatisticsComponent } from './Components/dashboard/statistics/statistics.component';
import { PlansComponent } from './Components/dashboard/plans/plans.component';
import { ChangepasswordComponent } from './Components/dashboard/profile/changepassword/changepassword.component';
import { SubdashboardComponent } from './Components/dashboard/subdashboard/subdashboard.component';
import { PlatformComponent } from './Components/platform/platform.component';


import { MobilePlatformModule } from './Components/mobile-platform/mobile-platform.module';
import { WindowsPlatformModule } from './Components/windows-platform/windows-platform.module';
import { LoginRegisterModule } from './Components/login-register/login-register.module';
import { TermsModule } from './Components/terms/terms.module';
import { SharedModule } from './Shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubscribeComponent,
    PackagesComponent,
    CardComponent,
    ServicesComponent,
    FeaturesComponent,
    HomeComponent,
    BlogComponent,
    NewsComponent,
    NewscardComponent,
    ArticleComponent,
    DashboardComponent,
    ProfileComponent,
    StatisticsComponent,
    PlansComponent,
    ChangepasswordComponent,
    SubdashboardComponent,
    PlatformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSplitModule,
    SharedModule,
    MobilePlatformModule,
    WindowsPlatformModule,
    LoginRegisterModule,
    TermsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }