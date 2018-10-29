import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPlayerComponent } from './track-player.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Track } from '../../../models/track';
import { By } from '@angular/platform-browser';

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

  it('should play/pause when methods are triggered', () => {
    component.play();
    expect(component.playing).toBeTruthy();

    component.pause();
    expect(component.playing).toBeFalsy();
  });

  it('should play when clicked on play button', () => {
    fixture.debugElement
           .query(By.css('.controls .play.button'))
           .triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(component.playing).toBeTruthy();
  });

  it('should pause when clicked on pause button', () => {
    component.play();
    expect(component.playing).toBeTruthy();

    fixture.detectChanges();

    fixture.debugElement
           .query(By.css('.controls .pause.button'))
           .triggerEventHandler('click', null);

    fixture.detectChanges();

    expect(component.playing).toBeFalsy();
  });

  it('should show/hide the play/pause button depending on playing value', () => {
    expect(fixture.debugElement.query(By.css('.controls .pause.button')))
      .toBeNull('play button at first');

    component.play();
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.controls .play.button')))
      .toBeNull('no play button on playing');

    component.pause();
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.controls .pause.button')))
      .toBeNull('no pause button on pausing');
  });
});
