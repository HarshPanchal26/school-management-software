import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsSettingsComponent } from './academics-settings.component';

describe('AcademicsSettingsComponent', () => {
  let component: AcademicsSettingsComponent;
  let fixture: ComponentFixture<AcademicsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicsSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
