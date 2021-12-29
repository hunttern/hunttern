import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './Components/login-register/login-register.component';

const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: LoginRegisterComponent},
  {path: 'terms', loadChildren: () => import('./Components/terms/terms.module').then(m => m.TermsModule) },
  {path: 'dashboard', loadChildren: () => import('./Components/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'platform', loadChildren: () => import('./Components/platform/platform.module').then(m => m.PlatformModule)},
  {path: 'admin', loadChildren: () => import ('./admin/admin.module').then(m => m.AdminModule)},
  {path: '**' , redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
