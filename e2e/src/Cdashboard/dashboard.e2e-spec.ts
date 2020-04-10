import { browser, element, by } from 'protractor';
import { DashboardPage } from './dashboard.po';

describe('workspace-project Dashboard', () => {
    let dashboardPage: DashboardPage;

    beforeEach(() => {
        dashboardPage = new DashboardPage();
    });

    it('should be click on add employee', () => {
        dashboardPage.navigateToDashboard();
        browser.pause();
        browser.driver.sleep(2000);
        dashboardPage.getAddEmployeeButton().click();
        expect(element(by.css('app-add-employee h3')).getText()).toEqual('Add Employee');
    });

    it('should be enter the employee details', () => {
        browser.pause();
        element(by.id('employee-name')).sendKeys('Ram');
        browser.driver.sleep(500);
        element(by.id('employee-position')).sendKeys('Engineer');
        browser.driver.sleep(500);
        element(by.id('employee-experience')).sendKeys(3);
        browser.driver.sleep(500);
        element(by.id('employee-company')).sendKeys('ABCD');
        browser.driver.sleep(500);
    });

    it('should click on add button', () => {
        browser.pause();
        element(by.id('addEmployee')).click();
        browser.pause();
        expect(browser.getCurrentUrl()).toContain('/dashboard');
    });

    it('should be enter the other employee details', () => {
        dashboardPage.getAddEmployeeButton().click();
        browser.driver.sleep(500);
        element(by.id('employee-name')).sendKeys('Lakhan');
        browser.driver.sleep(500);
        element(by.id('employee-position')).sendKeys('Data Entry');
        browser.driver.sleep(500);
        element(by.id('employee-experience')).sendKeys(3.5);
        browser.driver.sleep(500);
        element(by.id('employee-company')).sendKeys('Beat');
        browser.driver.sleep(500);
        element(by.id('addEmployee')).click();
    });

    it('should detect table data', () => {
        browser.pause();
        const row = element.all(by.id('employee-list')).get(2);
        const cells = row.all(by.tagName('td'));

        const cellTexts = cells.map(elm => {
            return elm.getText();
        });
        expect(cellTexts).toEqual(['Ram', 'Engineer', '3', 'ABCD', 'edit', 'delete']);
    });

    it('should click on edit', () => {
        browser.pause();
        const row = element.all(by.id('employee-list')).get(2);
        const cells = row.all(by.tagName('td'));
        expect(cells.get(4).getText()).toEqual('edit');
        cells.get(4).click();
    });

    it('should change the info', () => {
        browser.pause();
        element(by.id('employee-company')).clear();
        element(by.id('employee-company')).sendKeys('assic');
        browser.driver.sleep(500);
        expect(element(by.id('editEmployee')).getText()).toEqual('Edit');
        element(by.id('editEmployee')).click();
        browser.driver.sleep(1000);
    });

    it('should be click on delete', () => {
        browser.pause();
        const row = element.all(by.id('employee-list')).get(3);
        const cells = row.all(by.tagName('td'));
        expect(cells.get(5).getText()).toEqual('delete');
        cells.get(5).click();
        browser.driver.sleep(3000);
    });
});
