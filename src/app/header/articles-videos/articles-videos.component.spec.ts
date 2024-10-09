import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesVideosComponent } from './articles-videos.component';

describe('ArticlesVideosComponent', () => {
  let component: ArticlesVideosComponent;
  let fixture: ComponentFixture<ArticlesVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
