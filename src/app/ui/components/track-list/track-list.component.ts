import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../../models/track';

@Component({
  selector   : 'mus-track-list',
  templateUrl: './track-list.component.html',
  styleUrls  : ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {
  @Input()
  tracks: Track[];

  constructor() {
  }

  ngOnInit() {
  }

  sort(attribute, order = 'asc') {
    this.tracks = this.tracks.sort((a, b) => {
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
  }
}
