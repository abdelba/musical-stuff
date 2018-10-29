import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SearchFieldComponent } from '../../components/search-field/search-field.component';
import { TrackListComponent } from '../../components/track-list/track-list.component';
import { TrackListItemComponent } from '../../components/track-list-item/track-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports     : [RouterTestingModule, HttpClientModule],
      declarations: [HomeComponent, SearchFieldComponent, TrackListComponent, TrackListItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
