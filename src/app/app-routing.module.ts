import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './Components/article/article.component';
import { BlogComponent } from './Components/blog/blog.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PlansComponent } from './Components/dashboard/plans/plans.component';
import { ChangepasswordComponent } from './Components/dashboard/profile/changepassword/changepassword.component';
import { ProfileComponent } from './Components/dashboard/profile/profile.component';
import { StatisticsComponent } from './Components/dashboard/statistics/statistics.component';
import { SubdashboardComponent } from './Components/dashboard/subdashboard/subdashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginRegisterComponent } from './Components/login-register/login-register.component';
import { PlatformComponent } from './Components/platform/platform.component';
import { CreditsProgramComponent } from './Components/terms/credits-program/credits-program.component';
import { InstructorTermsComponent } from './Components/terms/instructor-terms/instructor-terms.component';
import { IntellectualPropertyPolicyComponent } from './Components/terms/intellectual-property-policy/intellectual-property-policy.component';
import { MasterServicesAgreementComponent } from './Components/terms/master-services-agreement/master-services-agreement.component';
import { PrivacyPolicyComponent } from './Components/terms/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './Components/terms/terms-of-use/terms-of-use.component';
import { TermsComponent } from './Components/terms/terms.component';
import { UdemyComponent } from './Components/terms/udemy/udemy.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: "home", pathMatch: "full"},
  {path: 'user', component: LoginRegisterComponent},
  {path: 'terms', component: TermsComponent, children: [
    {path: 'TermsOfUse', component: TermsOfUseComponent},
    {path: 'PrivacyPolicy', component: PrivacyPolicyComponent},
    {path: 'InstructorTerms', component: InstructorTermsComponent},
    {path: 'CreditsProgram', component: CreditsProgramComponent},
    {path: 'PropertyPolicy', component: IntellectualPropertyPolicyComponent},
    {path: 'Udemy', component: UdemyComponent},
    {path: 'ServicesAgreement', component: MasterServicesAgreementComponent},
  ],},
  {path: 'blog', component: BlogComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'dashboard',component: SubdashboardComponent},
    {path: 'Profile',component: ProfileComponent},
    {path: 'Statistics',component: StatisticsComponent},
    {path: 'Payments',component: PlansComponent},
    {path: 'changepassword',component: ChangepasswordComponent},
  ],},
  {path: 'article', component: ArticleComponent},
  {path: 'platform', component: PlatformComponent},
  {path: '**' , redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
