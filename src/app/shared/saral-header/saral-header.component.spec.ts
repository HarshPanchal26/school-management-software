import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaralHeaderComponent } from './saral-header.component';

describe('SaralHeaderComponent', () => {
  let component: SaralHeaderComponent;
  let fixture: ComponentFixture<SaralHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaralHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaralHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
