import { Component, OnInit } from '@angular/core';
import { TrackSearchService } from '../../../services/track-search.service';
import { Track } from '../../../models/track';

@Component({
  selector   : 'mus-home',
  templateUrl: './home.component.html',
  styleUrls  : ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tracks: Track[];

  constructor(private trackSearch: TrackSearchService) {
  }

  ngOnInit() {
    this.tracks = [];
  }

  search(searchTerm) {
    if (searchTerm) {
      this.trackSearch.doSearch(searchTerm).subscribe(tracks => this.tracks = tracks);
    }
  }

  sort(query) {
    this.trackSearch.sort(query.attribute, query.order);
  }
}
