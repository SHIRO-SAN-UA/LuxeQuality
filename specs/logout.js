import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('Logout', () => {
    it('Should logout user', async () => {

        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(InventoryPage.burgerMenu).toBeExisting();
        await (await InventoryPage.burgerMenu).click();
        
        //await browser.pause(3000);
        
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
      
        //await browser.pause(3000);

        // Verify the user has been logged out back to login page
        const currentUrlAfterLogout = await browser.getUrl();
        expect(currentUrlAfterLogout).toEqual('https://www.saucedemo.com/');

        // Check if the username field is empty
        const isUsernameEmpty = (await LoginPage.inputUsername.getValue()).trim() === '';

        // Check if the password field is empty
        const isPasswordEmpty = (await LoginPage.inputPassword.getValue()).trim() === '';

        // Assert that both fields are empty
        expect(isUsernameEmpty).toBe(true);
        expect(isPasswordEmpty).toBe(true);

    });
});