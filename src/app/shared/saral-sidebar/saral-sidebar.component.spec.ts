import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaralSidebarComponent } from './saral-sidebar.component';

describe('SaralSidebarComponent', () => {
  let component: SaralSidebarComponent;
  let fixture: ComponentFixture<SaralSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaralSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaralSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
