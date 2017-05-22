import { AngularCompleteGuideTestAppPage } from './app.po';

describe('angular-complete-guide-test-app App', () => {
  let page: AngularCompleteGuideTestAppPage;

  beforeEach(() => {
    page = new AngularCompleteGuideTestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
