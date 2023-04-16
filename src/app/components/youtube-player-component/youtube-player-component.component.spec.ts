import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlayerComponentComponent } from './youtube-player-component.component';

describe('YoutubePlayerComponentComponent', () => {
  let component: YoutubePlayerComponentComponent;
  let fixture: ComponentFixture<YoutubePlayerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubePlayerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubePlayerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
