import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsPlatformComponent } from './windows-platform.component';

describe('WindowsPlatformComponent', () => {
  let component: WindowsPlatformComponent;
  let fixture: ComponentFixture<WindowsPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowsPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
