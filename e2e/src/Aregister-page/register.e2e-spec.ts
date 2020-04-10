import { RegisterPage } from './register.po';
import { browser, element, by } from 'protractor';

describe('workspace-project Sign-up', () => {
    let registerPage: RegisterPage;

    beforeEach(() => {
        registerPage = new RegisterPage();
    });

    it('get sign-up page title', () => {
        registerPage.navigateToRegister();
        browser.pause();
        expect(registerPage.getSignUpText()).toEqual('Registration');
        registerPage.getConfirmButton().click();
    });

    it('Check validation on click of register', () => {
        browser.pause();
        expect(registerPage.getFirstNameRequiredMessage()).toEqual('First Name is required');
        expect(registerPage.getLastNameRequiredMessage()).toEqual('Last Name is required');
        expect(registerPage.getEmailRequiredMessage()).toEqual('Email is required');
        expect(registerPage.getPasswordRequiredMessage()).toEqual('Password is required');
        expect(registerPage.getConfirmPasswordRequiredMessage()).toEqual('Confirm Password is required');
    });

    it('should invalid form', () => {
        browser.pause();
        const form = registerPage.getForm().getAttribute('class');
        expect(form).toContain('ng-invalid');
        expect(registerPage.getSignUpText()).toEqual('Registration');
        browser.sleep(1000);
    });

    it('should write firstname', () => {
        browser.pause();
        registerPage.getFirstName();
        registerPage.getConfirmButton().click();
        expect(registerPage.getFirstNameRequiredMessage()).toEqual('First Name is required');
        element(by.id('firstname')).sendKeys('Rudra');
        browser.driver.sleep(1000);
    });

    it('should write lastname', () => {
        browser.pause();
        registerPage.getLastName().sendKeys('Raval');
        browser.driver.sleep(1000);
    });

    it('should write email', () => {
        browser.pause();
        registerPage.getEmail().sendKeys('test');
        browser.driver.sleep(1000);
        expect(registerPage.getEmailMatchMessage()).toEqual('Email must be a valid email address');
        browser.driver.sleep(1000);
        registerPage.getEmail().sendKeys('@gmail.com');
        browser.driver.sleep(1000);
    });

    it('should write password', () => {
        browser.pause();
        registerPage.getPassword().sendKeys('Rudra');
        browser.driver.sleep(1000);
        // tslint:disable-next-line:max-line-length
        expect(element(by.id('password-length')).getText()).toEqual('Password must be at least 12 length which contains first character must be uppercase, must conatin @ and # and must be only 4 digit conatin');
        browser.driver.sleep(1000);
        registerPage.getPassword().sendKeys('a@#1234');
        browser.driver.sleep(2000);
    });

    it('should write confirm password', () => {
        browser.pause();
        registerPage.getConfirmPassword().sendKeys('Rudra');
        browser.driver.sleep(1000);
        expect(element(by.id('confirm-password-match')).getText()).toEqual('Passwords must match');
        browser.driver.sleep(1000);
        registerPage.getConfirmPassword().sendKeys('a@#1234');
        browser.driver.sleep(1000);
    });

    it('should display register button', () => {
        browser.pause();
        expect(registerPage.getConfirmButton().getText()).toEqual('Register');
    });

    it('Navigate when register form will be valid', () => {
        browser.pause();
        registerPage.getConfirmButton().click();
        expect(browser.getCurrentUrl()).toContain('/home');
        browser.sleep(1000);
    });
});
