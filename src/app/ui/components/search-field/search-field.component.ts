import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector   : 'mus-search-field',
  templateUrl: './search-field.component.html',
  styleUrls  : ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {
  @Output() searched: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  search(term: string) {
    this.searched.emit(term);
  }
}
