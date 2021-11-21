import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructorTermsComponent } from './instructor-terms/instructor-terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { TermsComponent } from './terms.component';

const routes: Routes = [
  {path: '', component: TermsComponent, children: [
    {path: 'TermsOfUse', component: TermsOfUseComponent},
    {path: 'PrivacyPolicy', component: PrivacyPolicyComponent},
    {path: 'InstructorTerms', component: InstructorTermsComponent},
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
