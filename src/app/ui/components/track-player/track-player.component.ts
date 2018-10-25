import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Track } from '../../../models/track';
import { Router } from '@angular/router';

@Component({
  selector   : 'mus-track-player',
  templateUrl: './track-player.component.html',
  styleUrls  : ['./track-player.component.scss']
})
export class TrackPlayerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() track: Track;

  @Output() forward: EventEmitter<any>  = new EventEmitter();
  @Output() backward: EventEmitter<any> = new EventEmitter();

  private audio: HTMLAudioElement;

  playing = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.load();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['track'].isFirstChange()) {
      this.reload();
    }
  }

  ngOnDestroy(): void {
    this.pause();
    this.audio = null;
  }

  load() {
    this.audio = new Audio(this.track.listenUrl);
  }

  reload() {
    this.pause();
    this.load();
    this.play();
  }

  play() {
    this.playing = true;
    this.audio.play();
  }

  pause() {
    this.playing = false;
    this.audio.pause();
  }

  goForward() {
    this.forward.emit(null);
  }

  goBackward() {
    this.backward.emit(null);
  }
}
