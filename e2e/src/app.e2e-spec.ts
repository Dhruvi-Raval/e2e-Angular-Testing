import { AppPage } from './app.po';
import { browser, logging, Key, element, by } from 'protractor';
import { RegisterPage } from './register.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let registerPage: RegisterPage;

  beforeEach(() => {
    page = new AppPage();
    registerPage = new RegisterPage();
  });

  it('should display signup button', () => {
    page.navigateTo();
    expect(page.getSignUpButton().getText()).toEqual('Sign Up');
    browser.sleep(3000);
  });

  it('should display sign-in button', () => {
    browser.pause();
    expect(page.getSignInButton().getText()).toEqual('Sign In');
  });

  it('should route to signup page', () => {
    page.getSignUpButton().click();
    expect(page.getSignUpText()).toEqual('Registration');
  });

  it('should click on confirm', () => {
    browser.pause();
    page.getConfirmButton().click();
    expect(page.getFirstNameRequiredMessage()).toEqual('First Name is required');
    expect(page.getLastNameRequiredMessage()).toEqual('Last Name is required');
    expect(page.getEmailRequiredMessage()).toEqual('Email is required');
    expect(page.getPasswordRequiredMessage()).toEqual('Password is required');
    expect(page.getConfirmPasswordRequiredMessage()).toEqual('Confirm Password is required');
    browser.driver.sleep(2000);
  });


  it('should write firstname', () => {
    browser.pause();
    page.getFirstName().sendKeys('D');
    browser.driver.sleep(1000);
    page.getFirstName().sendKeys(Key.BACK_SPACE);
    browser.driver.sleep(1000);
    expect(page.getFirstNameRequiredMessage()).toEqual('First Name is required');
    page.getFirstName().sendKeys('Dhruvi');
    browser.driver.sleep(1000);
  });


  it('should write lasttname', () => {
    browser.pause();
    page.getLastName().sendKeys('Raval');
    browser.driver.sleep(1000);
  });

  it('should write email', () => {
    browser.pause();
    page.getEmail().sendKeys('test');
    browser.driver.sleep(1000);
    expect(page.getEmailMatchMessage()).toEqual('Email must be a valid email address');
    browser.driver.sleep(1000);
    page.getEmail().sendKeys('@gmail.com');
    browser.driver.sleep(2000);
  });

  it('should write password', () => {
    browser.pause();
    page.getPassword().sendKeys('dhruv');
    browser.driver.sleep(1000);
    expect(element(by.id('password-length')).getText()).toEqual('Password must be at least 6 characters');
    browser.driver.sleep(1000);
    page.getPassword().sendKeys('i@123');
    browser.driver.sleep(2000);
  });

  it('should write confirm password', () => {
    browser.pause();
    page.getConfirmPassword().sendKeys('dhruvi');
    browser.driver.sleep(1000);
    expect(element(by.id('confirm-password-match')).getText()).toEqual('Passwords must match');
    browser.driver.sleep(1000);
    page.getConfirmPassword().sendKeys('@123');
    browser.driver.sleep(2000);
  });

  it('should display register button', () => {
    browser.pause();
    expect(page.getConfirmButton().getText()).toEqual('Register');
  });

  it('should route on confirm', () => {
    browser.pause();
    page.getConfirmButton().click();
    page.navigateToSignIn();
    browser.sleep(1000);
  });

  // it('should route to signin page', () => {
  //   browser.pause();
  //   page.getSignInButton().click();
  //   expect(element(by.css('app-sign-in h5')).getText()).toEqual('Login');
  // });

  it('should write email for login', () => {
    browser.pause();
    page.getEmail().sendKeys('test@gmail.com');
    browser.driver.sleep(2000);
  });

  it('should write password for login', () => {
    browser.pause();
    page.getPassword().sendKeys('dhruvi@123');
    browser.driver.sleep(2000);
  });

  it('should click on login', () => {
    browser.pause();
    const login = element(by.id('login'));
    expect(login.getText()).toEqual('Login');
    login.click();
    page.navigateTo();
    browser.driver.sleep(2000);
  });
});
