import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js';

describe('Save cart', () => {
    it('Should save cart after user logged out an logged back in', async () => {
        // Login with correct credentials
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        
               
        // Click add backpack button
        await InventoryPage.addBackpackBtn.click();

        await browser.pause(1000);
        
        // Get the expected cart count, wich is 1
        const cartCount = await InventoryPage.shoppingCartBadge.getText();
        expect(cartCount).toEqual("1");

        //logout
        await expect(InventoryPage.burgerMenu).toBeExisting();
        await (await InventoryPage.burgerMenu).click();
        
          
        const overflowingMenu = InventoryPage.overflowingMenu;

        // Check if the menu is displayed
        const isMenuDisplayed = await overflowingMenu.isDisplayed();
 
        // Verify if the menu is overflowing based on attributes or other criteria
        if (isMenuDisplayed) {
             // You can check for specific attributes or conditions
             const overflowStyle = await overflowingMenu.getCSSProperty('overflow');
             
        } else {
             // Handle the case where the menu is not displayed as needed
             // You can add additional assertions or actions here
             console.log('The menu is not displayed.');
        
        };
        await (await InventoryPage.burgerMenuListlogoutBtn).click();

        // Login back in with correct credentials
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        // Verify that a shopping cart link exists on the inventory page
        await expect(InventoryPage.shoppingCartLink).toBeExisting();
        // Verify that Products exist on the inventory page
        await expect(InventoryPage.inventoryContainer).toBeExisting();

        await (InventoryPage.shoppingCartLink).click();
        
        // Verify the user has been redirected to cart page
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/cart.html');
        //Meh
        expect(CartPage.itemProduct4).toBeExisting();
      
        
    });
});