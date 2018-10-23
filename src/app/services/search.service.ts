import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Track } from '../models/track';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  getResults(term: string): Observable<Track[]> {
    // TODO handle errors
    const params = new HttpParams().set('term', term)
                                   .set('entity', 'song');

    return this.http
               .get<SearchResult>(environment.itunes.apiUrl, { params })
               .pipe(map(response => (new SearchResult(response)).getTracks()));
  }
}

class SearchResult {
  results: [Object];

  constructor(response) {
    this.results = response.results;
  }

  getTracks(): Track[] {
    return this.results.map(obj => this.toTrack(obj));
  }

  toTrack(obj): Track {
    const track  = new Track();
    track.id     = obj.trackId;
    track.length = obj.trackTimeMillis;
    track.price  = obj.trackPrice;
    track.genre  = obj.primaryGenreName;

    return track;
  }
}
