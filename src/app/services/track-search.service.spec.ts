import { TestBed } from '@angular/core/testing';

import { TrackSearchService } from './track-search.service';

describe('TrackSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackSearchService = TestBed.get(TrackSearchService);
    expect(service).toBeTruthy();
  });
});
