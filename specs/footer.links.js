import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Footer links', () => {
    it('Should navigate user to websites in the footer', async () => {
        // Log in as a standard user
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        // Verify the user is at Inventory page
        var currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/inventory.html');
        
        // 1. Click Twitter link in the footer
        await InventoryPage.footerTwitterLink.click();
        var handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        var currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://twitter.com/saucelabs');

        // 2. Return to Inventory page and click Facebook link in the footer
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
        await InventoryPage.footerFacebookLink.click();
        var handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        var currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.facebook.com/saucelabs');

        // 3. Return to Inventory page and click Linkedin link in the footer
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
        await InventoryPage.footerLinkedinLink.click();
        var handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        var currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.linkedin.com/company/sauce-labs/');




        
    });

     

});
