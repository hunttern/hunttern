import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';

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
import { PlansComponent } from './Components/dashboard/plans/plans.component';
import { ChangepasswordComponent } from './Components/dashboard/profile/changepassword/changepassword.component';
import { PlatformComponent } from './Components/platform/platform.component';
import { InputsComponent } from './Components/platform/inputs/inputs.component';
import { TabComponent } from './Components/platform/tab/tab.component';
import { StrategyComponent } from './Components/platform/strategy/strategy.component';
import { TradingComponent } from './Components/platform/strategy/trading/trading.component';
import { ToolsComponent } from './Components/platform/tools/tools.component';
import { WhatchlistComponent } from './Components/platform/tools/whatchlist/whatchlist.component';
import { AlertComponent } from './Components/platform/tools/alert/alert.component';
import { HotlistComponent } from './Components/platform/tools/hotlist/hotlist.component';
import { EventsComponent } from './Components/platform/tools/events/events.component';
import { ListComponent } from './Components/platform/tools/whatchlist/list/list.component';
import { InformationComponent } from './Components/platform/tools/whatchlist/information/information.component';
import { PerformanceComponent } from './Components/platform/tools/whatchlist/information/performance/performance.component';
import { SubdashboardComponent } from './Components/dashboard/subdashboard/subdashboard.component';
import { BarChartComponent } from './Components/Charts/bar-chart/bar-chart.component';
import { ScreenerComponent } from './Components/platform/screener/screener.component';
import { SettingsComponent } from './Components/platform/screener/settings/settings.component';
import { ChartComponent } from './Components/platform/chart/chart.component';
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
    StatisticsComponent,
    PlansComponent,
    ChangepasswordComponent,
    PlatformComponent,
    InputsComponent,
    TabComponent,
    StrategyComponent,
    TradingComponent,
    ToolsComponent,
    WhatchlistComponent,
    AlertComponent,
    HotlistComponent,
    EventsComponent,
    ListComponent,
    InformationComponent,
    PerformanceComponent,
    SubdashboardComponent,
    BarChartComponent,
    ScreenerComponent,
    SettingsComponent,
    ChartComponent
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
    AngularSplitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }