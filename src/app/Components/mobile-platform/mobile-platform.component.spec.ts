import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePlatformComponent } from './mobile-platform.component';

describe('MobilePlatformComponent', () => {
  let component: MobilePlatformComponent;
  let fixture: ComponentFixture<MobilePlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
