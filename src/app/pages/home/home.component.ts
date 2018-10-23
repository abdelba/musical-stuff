import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector   : 'mus-home',
  templateUrl: './home.component.html',
  styleUrls  : ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  results: [Object];
  searchTerm: string;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  search() {
    this.searchService.getResults(this.searchTerm).subscribe(results => this.results = results);
    console.log(this.results);
  }
}
