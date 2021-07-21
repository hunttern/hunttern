import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellectualPropertyPolicyComponent } from './intellectual-property-policy.component';

describe('IntellectualPropertyPolicyComponent', () => {
  let component: IntellectualPropertyPolicyComponent;
  let fixture: ComponentFixture<IntellectualPropertyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntellectualPropertyPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntellectualPropertyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
