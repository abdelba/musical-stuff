import { Component, OnInit } from '@angular/core';
import { TrackSearchService } from '../../services/track-search.service';

@Component({
  selector   : 'mus-home',
  templateUrl: './home.component.html',
  styleUrls  : ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchTerm: string;

  constructor(private trackSearch: TrackSearchService) {
  }

  ngOnInit() {
  }

  search() {
    if (this.searchTerm) {
      this.trackSearch.doSearch(this.searchTerm);
    }
  }
}
