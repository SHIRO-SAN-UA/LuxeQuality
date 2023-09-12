import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutOnePage from '../pageobjects/checkout.one.js';
import CheckoutTwoPage from '../pageobjects/checkout.two.js';
import CheckoutThreePage from '../pageobjects/checkout.three.js';

describe('Valid checkout process', () => {
    it('Should check out user', async () => {
        // Log in as a standard user
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        // Get the price of a product  Backpack at the inventory page
        //const productName = 'Sauce Labs Backpack'; 
        //const xpathExpression = `//div[@class='inventory_item_name' and text()='${productName}']/../../div[@class='pricebar']//div[@class='inventory_item_price']`;
        //const priceElement = await $(xpathExpression);
        //const productPrice = await priceElement.getText();
        //console.log('Product Price:', productPrice);

        // 1.  Click add backpack button
        await InventoryPage.addBackpackBtn.click();

        await browser.pause(1000);
        
        // Get the expected cart count, wich is 1
        const cartCount = await InventoryPage.shoppingCartBadge.getText();
        expect(cartCount).toEqual("1");

        // 2. Click shopping cart button
        await InventoryPage.shoppingCartLink.click();
        
        // Verify the user has been redirected to cart page
        var currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/cart.html');
        
        // Verify the product is the same, that has been added at the inventory page
        expect(CartPage.itemProduct4).toBeExisting();

        // 3. Click checkout button
        await CartPage.checkoutButton.click();
        currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/checkout-step-one.html');

        // 4-7. Fill the "First Name" field with valid data and click continue button
        await CheckoutOnePage.fillInfo('John', 'Connor', '90210');

        currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/checkout-step-two.html');
        
        // Verify the product is the same, that has been added at the inventory page
        expect(CartPage.itemProduct4).toBeExisting();

        // 8.  Click Finish button, verify user is redirected to Checkout coplete page
        await CheckoutTwoPage.finishButton.click();
        currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/checkout-complete.html');

        // Verify  "Thank you for your order!" message are displayed
        const actualText = await CheckoutThreePage.thankYouMessage.getText();
        const expectedText = "Thank you for your order!"
        console.log(`Actual Text: ${actualText}`);
        console.log(`Expected Text: ${expectedText}`);
        expect(actualText).toEqual(expectedText);

        // 9. Click Back Home button
        await CheckoutThreePage.backHomeButton.click();
        currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/inventory.html');

        // Verify that Products exist on the inventory page
        await expect(InventoryPage.inventoryContainer).toBeExisting();

        // Verify cart is epmty by assertion that cart bage does not exist
        expect(InventoryPage.shoppingCartBadge).not.toBeExisting();



    });

     

});
