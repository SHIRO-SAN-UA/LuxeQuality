import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Sauce web login', () => {
    it('should NOT login standard_user with incorrect login', async () => {
        await LoginPage.open()
        await LoginPage.login('standarD_user', 'secret_sauce')
        
        //Check the error line is present
        const errorline = $('.input_error.error');
        console.log("Is errorline displayed?", await errorline.isDisplayed());
        await errorline.waitForExist({ timeout: 5000 }); // Wait up to 5 seconds for the element to exist

        // Get the color property of the element
        const color = await errorline.getCSSProperty('border-bottom-color');
        
        // Check the login and password fields are highltghted in red
        const actualColor = color.parsed.hex;
        const expectedColor = '#e2231a';

        console.log(`Actual Color: ${actualColor}`);
        console.log(`Expected Color: ${expectedColor}`);

        expect(actualColor).toEqual(expectedColor);

                
        // Locate the error image element within the login field using a CSS selector
        const errorImageInLoginField = $('.error_icon');

        // Check if the error image is displayed in the login field
        console.log("Is errorImageInLoginField displayed?", await errorImageInLoginField.isDisplayed());

        //Check the error message is present
        const errorMsgCont = $('.error-message-container.error > h3');
        // Get the text content of the element
        const actualText = await errorMsgCont.getText();
        const expectedText = "Epic sadface: Username and password do not match any user in this service"
        console.log(`Actual Text: ${actualText}`);
        console.log(`Expected Text: ${expectedText}`);
        expect(actualText).toEqual(expectedText);

           
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
