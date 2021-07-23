import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';
import { PackagesComponent } from './Components/packages/packages.component';
import { CardComponent } from './Components/packages/card/card.component';
import { ServicesComponent } from './Components/services/services.component';
import { FeaturesComponent } from './Components/features/features.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login-register/login/login.component';
import { RegisterComponent } from './Components/login-register/register/register.component';
import { ForgetComponent } from './Components/login-register/forget/forget.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TermsComponent } from './Components/terms/terms.component';
import { InstructorTermsComponent } from './Components/terms/instructor-terms/instructor-terms.component';
import { TermsOfUseComponent } from './Components/terms/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './Components/terms/privacy-policy/privacy-policy.component';
import { CreditsProgramComponent } from './Components/terms/credits-program/credits-program.component';
import { IntellectualPropertyPolicyComponent } from './Components/terms/intellectual-property-policy/intellectual-property-policy.component';
import { UdemyComponent } from './Components/terms/udemy/udemy.component';
import { MasterServicesAgreementComponent } from './Components/terms/master-services-agreement/master-services-agreement.component';
import { BlogComponent } from './Components/blog/blog.component';
import { NewsComponent } from './Components/blog/news/news.component';
import { NewscardComponent } from './Components/blog/newscard/newscard.component';
import { ArticleComponent } from './Components/article/article.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProfileComponent } from './Components/dashboard/profile/profile.component';
import { StatisticsComponent } from './Components/dashboard/statistics/statistics.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    SubscribeComponent,
    PackagesComponent,
    CardComponent,
    ServicesComponent,
    FeaturesComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    TermsComponent,
    InstructorTermsComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    CreditsProgramComponent,
    IntellectualPropertyPolicyComponent,
    UdemyComponent,
    MasterServicesAgreementComponent,
    BlogComponent,
    NewsComponent,
    NewscardComponent,
    ArticleComponent,
    DashboardComponent,
    ProfileComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
