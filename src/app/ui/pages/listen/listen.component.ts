import { Component, OnInit } from '@angular/core';
import { TrackSearchService } from '../../../services/track-search.service';
import { Track } from '../../../models/track';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector   : 'mus-listen',
  templateUrl: './listen.component.html',
  styleUrls  : ['./listen.component.scss']
})
export class ListenComponent implements OnInit {
  track: Track = null;
  prevId: string;
  nextId: string;

  constructor(
    private trackSearch: TrackSearchService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.trackSearch.tracks.subscribe(tracks => {
        if (!tracks) {
          return;
        }

        const trackIndex = tracks.findIndex(t => String(t.id) === params.trackId);

        const len = tracks.length;

        this.track  = tracks[trackIndex];
        this.prevId = tracks[(trackIndex + len - 1) % len].id;
        this.nextId = tracks[(trackIndex + len + 1) % len].id;
      });
    });
  }

  goNextTrack() {
    this.router.navigate([`/listen/${this.nextId}`]);
  }

  goPrevTrack() {
    this.router.navigate([`/listen/${this.prevId}`]);
  }

  getShareText() {
    return `Listening to ${this.track.title} by ${this.track.artist}`;
  }
}
