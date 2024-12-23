import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaralTablesComponent } from './saral-tables.component';

describe('SaralTablesComponent', () => {
  let component: SaralTablesComponent;
  let fixture: ComponentFixture<SaralTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaralTablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaralTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
