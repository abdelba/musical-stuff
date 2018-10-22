import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResult } from '../models/search-result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  getResults(term: string): Observable<SearchResult[]> {
    // TODO handle errors
    const params = new HttpParams().set('term', term);
    return this.http.get<SearchResult[]>(environment.itunes.apiUrl, { params });
  }
}
