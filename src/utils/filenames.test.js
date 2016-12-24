import { genStandardFileName } from './filenames';

describe('file name generator', () => {
  it('should return the correct string', () => {
    const actual = genStandardFileName('txt');
    const testRegex = /kaeru\-card_\d{1,2}-\d{1,2}-\d{4}-\d{1,2}:\d{2}:\d{2}-\w{2}\.\w+/;

    expect(actual.match(testRegex)).toBeTruthy();
  });
});
