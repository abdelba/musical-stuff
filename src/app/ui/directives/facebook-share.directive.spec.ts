import { FacebookShareDirective } from './facebook-share.directive';
import { ElementRef } from '@angular/core';

describe('FacebookShareDirective', () => {
  it('should create an instance', () => {
    const directive = new FacebookShareDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});
