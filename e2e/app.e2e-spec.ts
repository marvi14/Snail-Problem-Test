import { EthanTestPage } from './app.po';

describe('ethan-test App', () => {
  let page: EthanTestPage;

  beforeEach(() => {
    page = new EthanTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
