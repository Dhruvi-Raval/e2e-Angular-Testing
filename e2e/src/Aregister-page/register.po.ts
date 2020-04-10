import { browser, by, element, Key } from 'protractor';

export class RegisterPage {


    navigateToRegister() {
        return browser.get('/sign-up');
    }

    getSignUpText() {
        return element(by.css('app-sign-up h5')).getText();
    }

    getFirstName() {
        const ele =  element(by.id('firstname'));
        ele.sendKeys('D');
        browser.driver.sleep(1000);
        ele.sendKeys(Key.BACK_SPACE);
        browser.driver.sleep(1000);
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

    formValid() {
        const ele = element(by.css('#registerForm'));
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

    getForm() {
        return element(by.css('#registerForm'));
    }

    navigateToSignIn() {
        return browser.get('/sign-in');
    }

}
