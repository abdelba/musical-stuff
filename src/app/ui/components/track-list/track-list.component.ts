import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Track } from '../../../models/track';

@Component({
  selector   : 'mus-track-list',
  templateUrl: './track-list.component.html',
  styleUrls  : ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {
  @Input() tracks: Track[];
  @Output() orderBy: EventEmitter<{ attribute: string, order: string }>;

  constructor() {
  }

  ngOnInit() {
  }

  sort(attribute, order = 'asc') {
    this.orderBy.emit({ attribute, order });
  }
}
