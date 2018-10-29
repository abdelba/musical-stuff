import { TwitterShareDirective } from './twitter-share.directive';
import { ElementRef } from '@angular/core';

describe('TwitterShareDirective', () => {
  it('should create an instance', () => {
    const directive = new TwitterShareDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});
