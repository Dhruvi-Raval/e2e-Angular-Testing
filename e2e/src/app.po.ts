import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSignUpButton() {
    return element(by.css('[routerLink="/sign-up"]'));
  }

  getSignUpText() {
    return element(by.css('app-sign-up h5')).getText();
  }

  getFirstName() {
    return element(by.id('firstname'));
  }

  getLastName() {
    return element(by.id('lastname'));
  }

  getEmail() {
    return element(by.id('email'));
  }

  getPassword() {
    return element(by.id('password'));
  }

  getConfirmPassword() {
    return element(by.id('confirmPassword'));
  }

  getConfirmButton() {
    return element(by.id('register'));
  }

  getFirstNameRequiredMessage() {
    const errorElement = element(by.id('firstname-required'));
    if (errorElement.isPresent) {
        return errorElement.getText();
    }
  }

  getLastNameRequiredMessage() {
    const errorElement = element(by.id('lastname-required'));
    if (errorElement.isPresent) {
        return errorElement.getText();
    }
  }

  getEmailRequiredMessage() {
    const errorElement = element(by.id('email-required'));
    if (errorElement.isPresent) {
        return errorElement.getText();
    }
  }

  getEmailMatchMessage() {
    const errorElement = element(by.id('email-match'));
    if (errorElement.isPresent) {
        return errorElement.getText();
    }
  }

  getPasswordRequiredMessage() {
    const errorElement = element(by.id('password-required'));
    if (errorElement.isPresent) {
        return errorElement.getText();
    }
  }

  getConfirmPasswordRequiredMessage() {
    const errorElement = element(by.id('confirm-password-required'));
    if (errorElement.isPresent) {
        return errorElement.getText();
    }
  }

  navigateToSignIn() {
    return browser.get('/sign-in');
  }

  getSignInButton() {
    return element(by.css('[routerLink="/sign-in"]'));
  }
}
