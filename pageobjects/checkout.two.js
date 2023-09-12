import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutTwoPage extends Page {
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
    
    get finishButton () {
        return $('#finish');
    }
};
export default new CheckOutTwoPage();