import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

const FACEBOOK_SHARE_URL = 'https://www.facebook.com/sharer/sharer.php';

@Directive({
  selector: '[musFacebookShare]'
})
export class FacebookShareDirective implements OnChanges {
  @Input() text: string;
  private el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnChanges() {
    const params = new URLSearchParams();
    params.set('quote', this.text);
    params.set('u', 'google.com');

    this.el.nativeElement.href = `${FACEBOOK_SHARE_URL}?${params.toString()}`;
  }
}
