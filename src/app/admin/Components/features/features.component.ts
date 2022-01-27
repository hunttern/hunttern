import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Ifeature } from '../../Model/Ifeature.interface';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  feature$: Subscription;
  featuresList$: Observable<Ifeature[]>;
  constructor(private fb: FormBuilder, private feature: ManagerService) { 
    this.featuresList$ = this.feature.getFeatures();
  }
  featureForm: FormGroup = this.fb.group({
    name: [],
    value: []
  });
  addFeature(){
    const feature = {name: this.featureForm.value.name, value: this.featureForm.value.value}
    this.feature$ = this.feature.addFeature(feature).subscribe();
  }
}
