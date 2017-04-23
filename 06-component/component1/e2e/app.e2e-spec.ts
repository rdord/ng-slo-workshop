import { Component1Page } from './app.po';

describe('component1 App', () => {
  let page: Component1Page;

  beforeEach(() => {
    page = new Component1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
