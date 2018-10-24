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

  getResults(term: string): Promise<Track[]> {
    // TODO handle errors
    const params = new HttpParams().set('term', term)
                                   .set('entity', 'song');

    return this.http
               .get<SearchResult>(environment.itunes.apiUrl, { params })
               .pipe(map(response => (new SearchResult(response)).getTracks()))
               .toPromise();
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
    const track       = new Track();
    track.id          = obj.trackId;
    track.length      = obj.trackTimeMillis;
    track.price       = obj.trackPrice;
    track.genre       = obj.primaryGenreName;
    track.thumbUrl    = obj.artworkUrl100;
    track.coverUrl    = obj.artworkUrl100.replace('100x100', '600x600');
    track.title       = obj.trackName;
    track.artist      = obj.artistName;
    track.album       = obj.collectionName;
    track.releaseDate = obj.releaseDate;

    return track;
  }
}
