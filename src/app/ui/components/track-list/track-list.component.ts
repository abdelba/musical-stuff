import { Component, OnInit } from '@angular/core';
import { TrackSearchService } from '../../../services/track-search.service';
import { Observable } from 'rxjs';
import { Track } from '../../../models/track';

@Component({
  selector   : 'mus-track-list',
  templateUrl: './track-list.component.html',
  styleUrls  : ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {
  tracks: Observable<Track[]>;

  constructor(private trackSearch: TrackSearchService) {
  }

  ngOnInit() {
    this.tracks = this.trackSearch.tracks;
  }

  sort(attribute, order = 'asc') {
    this.trackSearch.sort(attribute, order);
  }
}
