import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsBooksComponent } from './reports-books.component';

describe('ReportsBooksComponent', () => {
  let component: ReportsBooksComponent;
  let fixture: ComponentFixture<ReportsBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportsBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
