import { TestBed } from '@angular/core/testing';

import { TrackSearchService } from './track-search.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
// @ts-ignore
import jsonData from './test-data.json';


describe('TrackSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports  : [HttpClientModule],
    providers: [TrackSearchService]
  }));

  let httpClientSpy: { get: jasmine.Spy };
  let trackSearchService: TrackSearchService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of(jsonData));

    trackSearchService = new TrackSearchService(<any> httpClientSpy);
  });

  it('should be created', () => {
    const service: TrackSearchService = TestBed.get(TrackSearchService);
    expect(service).toBeTruthy();
  });


  it('should start with empty array of tracks', () => {
    new TrackSearchService(null).tracks.subscribe(tracks => expect(tracks).toEqual([]));
  });


  it('should transform itunes data to track array', () => {
    trackSearchService
      .doSearch('Michael Jackson')
      .subscribe(tracks => {
        expect(tracks.length).toBe(3);
        expect(tracks[0].artist).toEqual('Michael Jackson');
      });
  });

  it('should sort properly', () => {
    trackSearchService
      .doSearch('Michael Jackson')
      .subscribe(tracks => {
        trackSearchService.sort('price', 'asc');
        trackSearchService.tracks.subscribe(sortedTracks => {
          expect(sortedTracks[0].title).toEqual('Smooth Criminal');
        });
      });
  });
});
