import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaralModalComponent } from './saral-modal.component';

describe('SaralModalComponent', () => {
  let component: SaralModalComponent;
  let fixture: ComponentFixture<SaralModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaralModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaralModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
