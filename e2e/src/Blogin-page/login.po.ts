import { browser, element, by } from 'protractor';


export class LoginPage {

    navigateToSignIn() {
        return browser.get('/sign-in');
    }

    getEmail() {
        return element(by.id('login-email'));
    }

    getPassword() {
        return element(by.id('login-password'));
    }
}
