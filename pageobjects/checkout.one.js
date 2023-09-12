import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutOnePage extends Page {
    /**
     * define selectors using getter methods
     */
    get shoppingCartLink () {
        return $('.shopping_cart_link');
    }

    get burgerMenu () {
        return $('#react-burger-menu-btn');
    }

    get overflowingMenu () {
        return $('.bm-menu');
    }

    get burgerMenuListlogoutBtn () {
        return $('#logout_sidebar_link');
    }
    get firstNameField () {
        return $('#first-name');
    }

    get lastNameField () {
        return $('#last-name');
    }

    get zipCodeField () {
        return $('#postal-code');
    }

    get continueButton () {
        return $('#continue');
    }

    async fillInfo (username, password, zipcode) {
        await this.firstNameField.setValue(username);
        await this.lastNameField.setValue(password);
        await this.zipCodeField.setValue(zipcode);

        await this.continueButton.click();
    }
    
};
export default new CheckOutOnePage();