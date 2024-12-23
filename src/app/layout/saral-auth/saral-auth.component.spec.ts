import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaralAuthComponent } from './saral-auth.component';

describe('SaralAuthComponent', () => {
  let component: SaralAuthComponent;
  let fixture: ComponentFixture<SaralAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaralAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaralAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
