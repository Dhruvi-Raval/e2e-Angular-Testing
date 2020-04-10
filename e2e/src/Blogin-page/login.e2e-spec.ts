import { LoginPage } from './login.po';
import { browser, element, by } from 'protractor';

describe('workspace-project Login', () => {
    let loginPage: LoginPage;

    beforeEach(() => {
        loginPage = new LoginPage();
    });

    it('get sign-in page title', () => {
        loginPage.navigateToSignIn();
        browser.pause();
        expect(element(by.css('app-sign-in h5')).getText()).toEqual('Login');
        browser.driver.sleep(1000);
    });

    it('should write email for login', () => {
        browser.pause();
        loginPage.getEmail().sendKeys('test@gmail.com');
        browser.driver.sleep(1000);
    });

    it('should write password for login', () => {
        browser.pause();
        loginPage.getPassword().sendKeys('Rudraa@#1234');
        browser.driver.sleep(1000);
    });

    it('should be login button', () => {
        browser.pause();
        expect(element(by.id('login')).getText()).toEqual('Login');
    });

    it('should be click on login', () => {
        browser.pause();
        element(by.id('login')).click();
        expect(browser.getCurrentUrl()).toContain('/dashboard');
    });

});
