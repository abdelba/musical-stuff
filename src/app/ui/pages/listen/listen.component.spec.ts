import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenComponent } from './listen.component';
import { TrackPlayerComponent } from '../../components/track-player/track-player.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListenComponent', () => {
  let component: ListenComponent;
  let fixture: ComponentFixture<ListenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports     : [HttpClientModule, RouterTestingModule],
      declarations: [ListenComponent, TrackPlayerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(ListenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
