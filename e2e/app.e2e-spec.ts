import { App4trainingPage } from './app.po';

describe('app4training App', () => {
  let page: App4trainingPage;

  beforeEach(() => {
    page = new App4trainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
