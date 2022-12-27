import { PrefixPipe } from './prefix.pipe';

describe('PrefixPipe', () => {
  it('create an instance', () => {
    const pipe = new PrefixPipe();
    expect(pipe).toBeTruthy();
  });
  it('should change title', () => {
    const pipe = new PrefixPipe();
    expect(pipe.transform('Apple')).toBe('Product - Apple');
  });
  it('should not change title if empty', () => {
    const pipe = new PrefixPipe();
    expect(pipe.transform('')).toBe('');
  });
});
