import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesDaashboardComponent } from './classes.dashboard.component';

describe('ClassesDaashboardComponent', () => {
  let component: ClassesDaashboardComponent;
  let fixture: ComponentFixture<ClassesDaashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesDaashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesDaashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
