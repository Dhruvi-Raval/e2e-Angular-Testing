import { browser, element, by } from 'protractor';

export class DashboardPage {

    navigateToDashboard() {
        return browser.get('/dashboard');
    }

    getAddEmployeeButton() {
        return element(by.id('add-employee'));
    }

}
