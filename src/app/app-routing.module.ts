import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './Components/article/article.component';
import { BlogComponent } from './Components/blog/blog.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginRegisterComponent } from './Components/login-register/login-register.component';
import { PlatformComponent } from './Components/platform/platform.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: "home", pathMatch: "full"},
  {path: 'user', component: LoginRegisterComponent},
  {path: 'terms', loadChildren: () => import('./Components/terms/terms.module').then(m => m.TermsModule) },
  {path: 'blog', component: BlogComponent},
  {path: 'dashboard', loadChildren: () => import('./Components/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'article', component: ArticleComponent},
  {path: 'platform', component: PlatformComponent},
  {path: '**' , redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
