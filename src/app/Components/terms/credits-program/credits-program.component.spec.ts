import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsProgramComponent } from './credits-program.component';

describe('CreditsProgramComponent', () => {
  let component: CreditsProgramComponent;
  let fixture: ComponentFixture<CreditsProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
