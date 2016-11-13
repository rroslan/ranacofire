import { RanacofirePage } from './app.po';

describe('ranacofire App', function() {
  let page: RanacofirePage;

  beforeEach(() => {
    page = new RanacofirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
