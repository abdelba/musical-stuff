import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class SearchResult {
  results: [Object];
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  getResults(term: string): Observable<[Object]> {
    // TODO handle errors
    const params = new HttpParams().set('term', term);
    return this.http
               .get<SearchResult>(environment.itunes.apiUrl, { params })
               .pipe(map(response => response.results));
  }
}
