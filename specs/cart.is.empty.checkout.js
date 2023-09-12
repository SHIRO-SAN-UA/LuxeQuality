import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';

describe('Empty cart checkout', () => {
    it('Should stay on cart page and warn user', async () => {
        // Log in as a standard user
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

                
        // 1. Click shopping cart button
        await InventoryPage.shoppingCartLink.click();
        
        
        // 2. Click checkout button
        await CartPage.checkoutButton.click();

        // Verify the user stays on cart page
        var currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/cart.html');
        
        // Verify error message is displayed
        const errorMessage = 'Cart is empty'; 
        const pageText = await $('body').getText();
        const isErrorMessagePresent = pageText.includes(errorMessage);
        expect(isErrorMessagePresent).toBe(true);

        
    });

     

});
