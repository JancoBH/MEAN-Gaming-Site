import { AngularGamingSitePage } from './app.po';

describe('angular-gaming-site App', () => {
  let page: AngularGamingSitePage;

  beforeEach(() => {
    page = new AngularGamingSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
