import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowsPlatformModule } from '../windows-platform/windows-platform.module';
import { MobilePlatformModule } from '../mobile-platform/mobile-platform.module';
import { PlatformRoutingModule } from './platform-routing.module';

import { PlatformComponent } from './platform.component';

@NgModule({
  declarations: [PlatformComponent],
  imports: [
    CommonModule,
    WindowsPlatformModule,
    MobilePlatformModule,
    PlatformRoutingModule
  ],
  exports: [PlatformComponent]
})
export class PlatformModule { }
