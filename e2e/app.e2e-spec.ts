import { Ng2ShoppingPage } from './app.po';

describe('ng2-shopping App', function() {
  let page: Ng2ShoppingPage;

  beforeEach(() => {
    page = new Ng2ShoppingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
