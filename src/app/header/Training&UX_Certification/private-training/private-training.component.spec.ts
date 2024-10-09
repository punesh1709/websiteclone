import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTrainingComponent } from './private-training.component';

describe('PrivateTrainingComponent', () => {
  let component: PrivateTrainingComponent;
  let fixture: ComponentFixture<PrivateTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivateTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
