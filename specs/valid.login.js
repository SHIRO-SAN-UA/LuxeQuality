import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('Sauce web login', () => {
    it('should login standard_user and navigate to the inventory page', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
 
        // Wait for the URL to change to the expected page
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://www.saucedemo.com/inventory.html',
            {
                timeout: 10000, // Adjust the timeout as needed
                timeoutMsg: 'Expected URL to be https://www.saucedemo.com/inventory.html after login'
            }
        );
        // Verify that a shopping cart link exists on the inventory page
        await expect(InventoryPage.shoppingCartLink).toBeExisting();
        // Verify that Products exist on the inventory page
        await expect(InventoryPage.inventoryContainer).toBeExisting();
    });
    
});
describe('Password Masking', () => {
    it('should mask the entered password', async () => {
        await LoginPage.open();
        
        const passwordInput = await LoginPage.inputPassword;

        // Get the value of the type attribute of the password input field
        const typeAttribute = await passwordInput.getAttribute('type');
        
        // Check if the type attribute is equal to "password"
        expect(typeAttribute).toEqual('password');
    });
});

