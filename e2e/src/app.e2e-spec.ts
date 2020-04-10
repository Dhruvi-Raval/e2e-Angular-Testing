import { browser, element, by } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  const page = new AppPage();

  beforeEach(() => {
    // page.navigateTo();
  });

  it('should display signup button failed case', () => {
    page.navigateTo();
    browser.pause();
    // This is for failed test case as name will not be match
    expect(page.getSignUpButton().getText()).toEqual('Sign In');
  });

  it('should display signup button passed case', () => {
    browser.pause();
    // This is the passed case
    expect(page.getSignUpButton().getText()).toEqual('Sign Up');
    browser.sleep(1000);
  });

  it('should display sign-in button', () => {
    browser.pause();
    expect(page.getSignInButton().getText()).toEqual('Sign In');
    browser.sleep(1000);
  });
});
