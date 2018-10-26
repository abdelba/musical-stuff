import { Component, OnInit } from '@angular/core';
import { TrackSearchService } from '../../../services/track-search.service';

@Component({
  selector   : 'mus-home',
  templateUrl: './home.component.html',
  styleUrls  : ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private trackSearch: TrackSearchService) {
  }

  ngOnInit() {
  }

  search(searchTerm) {
    if (searchTerm) {
      this.trackSearch.doSearch(searchTerm);
    }
  }
}
