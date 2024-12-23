import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaralDashboardComponent } from './saral-dashboard.component';

describe('SaralDashboardComponent', () => {
  let component: SaralDashboardComponent;
  let fixture: ComponentFixture<SaralDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaralDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaralDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
