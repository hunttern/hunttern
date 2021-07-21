import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorTermsComponent } from './instructor-terms.component';

describe('InstructorTermsComponent', () => {
  let component: InstructorTermsComponent;
  let fixture: ComponentFixture<InstructorTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
