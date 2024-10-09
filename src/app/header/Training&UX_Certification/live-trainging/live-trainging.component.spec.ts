import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTraingingComponent } from './live-trainging.component';

describe('LiveTraingingComponent', () => {
  let component: LiveTraingingComponent;
  let fixture: ComponentFixture<LiveTraingingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiveTraingingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveTraingingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
