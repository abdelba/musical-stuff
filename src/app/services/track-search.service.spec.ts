import { TestBed } from '@angular/core/testing';

import { TrackSearchService } from './track-search.service';
import { HttpClientModule } from '@angular/common/http';

describe('TrackSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports  : [HttpClientModule],
    providers: [TrackSearchService]
  }));

  it('should be created', () => {
    const service: TrackSearchService = TestBed.get(TrackSearchService);
    expect(service).toBeTruthy();
  });
});
