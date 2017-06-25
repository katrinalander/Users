import { USERSPage } from './app.po';

describe('users App', () => {
  let page: USERSPage;

  beforeEach(() => {
    page = new USERSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
