import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, take, tap } from 'rxjs/operators';
import { Track } from '../models/track';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackSearchService {
  private _tracks: BehaviorSubject<Track[]>;

  constructor(private http: HttpClient) {
    this._tracks = new BehaviorSubject<Track[]>([]);
  }

  doSearch(term: string): Observable<Track[]> {
    const params = new HttpParams().set('term', term)
                                   .set('entity', 'song');

    return this.http
               .get(environment.itunes.apiUrl, { params })
               .pipe(
                 take(1),
                 map(response => (new ItunesSearchResult(response)).getTracks()),
                 tap(tracks => this._tracks.next(tracks)));
  }

  get tracks(): Observable<Track[]> {
    return this._tracks.asObservable();
  }

  sort(attribute: any, order: string) {
    const sortedTracks = this._tracks.value.sort((a, b) => {
      if (order === 'desc') {
        [a, b] = [b, a];
      }

      if (a[attribute] < b[attribute]) {
        return -1;
      }
      if (a[attribute] > b[attribute]) {
        return 1;
      }
      return 0;
    });

    this._tracks.next(sortedTracks);
  }
}

class ItunesSearchResult {
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
    track.listenUrl   = obj.previewUrl;

    return track;
  }
}
