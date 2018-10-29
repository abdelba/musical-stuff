import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackListItemComponent } from './track-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Track } from '../../../models/track';

describe('TrackListItemComponent', () => {
  let component: TrackListItemComponent;
  let fixture: ComponentFixture<TrackListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports     : [RouterTestingModule],
      declarations: [TrackListItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(TrackListItemComponent);
    component = fixture.componentInstance;
    component.track = new Track();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
