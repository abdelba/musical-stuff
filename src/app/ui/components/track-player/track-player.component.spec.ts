import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPlayerComponent } from './track-player.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Track } from '../../../models/track';

describe('TrackPlayerComponent', () => {
  let component: TrackPlayerComponent;
  let fixture: ComponentFixture<TrackPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrackPlayerComponent],
      imports     : [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture         = TestBed.createComponent(TrackPlayerComponent);
    component       = fixture.componentInstance;
    component.track = new Track();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
