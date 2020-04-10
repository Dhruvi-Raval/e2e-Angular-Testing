import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSignUpButton() {
    return element(by.id('sign_up'));
  }

  getSignInButton() {
    return element(by.id('sign_in'));
  }
}
