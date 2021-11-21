import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialsModule } from 'src/app/Shared/materials/materials.module';
import { AppRoutingModule } from './app-routing.module';

import { TermsComponent } from './terms.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { InstructorTermsComponent } from './instructor-terms/instructor-terms.component';
import { SharedModule } from 'src/app/Shared/shared.module';

@NgModule({
  declarations: [TermsComponent,TermsOfUseComponent,InstructorTermsComponent,PrivacyPolicyComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: []
})
export class TermsModule { }