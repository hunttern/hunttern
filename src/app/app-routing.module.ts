import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './Auth/login-register.component';
import { AuthGuard } from './Guard/Auth.Guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user', component: LoginRegisterComponent},
  {path: 'terms', loadChildren: () => import('./terms/terms.module').then(m => m.TermsModule) },
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[AuthGuard]},
  {path: 'platform', loadChildren: () => import('./platform/windows-platform/windows-platform.module').then(m => m.WindowsPlatformModule),canActivate:[AuthGuard]},
  {path: 'admin', loadChildren: () => import ('./admin/admin.module').then(m => m.AdminModule), canActivate:[AuthGuard]},
  {path: '**' , redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
