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

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: "home", pathMatch: "full"},
  {path: 'user', component: LoginRegisterComponent},
  {path: 'terms', loadChildren: () => import('./Components/terms/terms.module').then(m => m.TermsModule) },
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
