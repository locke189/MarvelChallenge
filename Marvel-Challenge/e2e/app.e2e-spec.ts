import { MarvelChallengePage } from './app.po';

describe('marvel-challenge App', function() {
  let page: MarvelChallengePage;

  beforeEach(() => {
    page = new MarvelChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
