import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Track } from '../../models/track';

@Component({
  selector   : 'mus-home',
  templateUrl: './home.component.html',
  styleUrls  : ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tracks: Track[];
  searchTerm: string;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  search() {
    this.searchService
        .getResults(this.searchTerm)
        .then(results => this.tracks = results);
  }
}
