import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WindowsPlatformComponent } from './windows-platform.component';

const routes: Routes = [
  {path: '',component: WindowsPlatformComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
