import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxCertificationComponent } from './ux-certification.component';

describe('UxCertificationComponent', () => {
  let component: UxCertificationComponent;
  let fixture: ComponentFixture<UxCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UxCertificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UxCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
