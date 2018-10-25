import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

const TWITTER_SHARE_URL = 'https://twitter.com/intent/tweet';

@Directive({
  selector: '[musTwitterShare]'
})
export class TwitterShareDirective implements OnChanges {
  @Input() text: string;
  private el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnChanges(): void {
    const params = new URLSearchParams();
    params.set('text', this.text);
    this.el.nativeElement.href = `${TWITTER_SHARE_URL}?${params.toString()}`;
  }
}
