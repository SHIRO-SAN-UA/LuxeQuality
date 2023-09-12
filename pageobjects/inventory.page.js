import { $, $$ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */

    get footerLinkedinLink () {
        return $('.social_linkedin > a:nth-child(1)')
    }


    get footerFacebookLink () {
        return $('.social_facebook > a:nth-child(1)')
    }

    get footerTwitterLink () {
        return $('.social_twitter > a:nth-child(1)')
    }

    get shoppingCartLink () {
        return $('.shopping_cart_link');
    }

    get inventoryContainer () {
        return $('.inventory_container');
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
    //Doesnt look good, too specific?
    get addBackpackBtn () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get shoppingCartBadge () {
        return $('.shopping_cart_badge');
    }

    // Selector for the sorting container element
    get sortingContainer() {
        return $('.product_sort_container');
    }

    // Selector for product name elements
    get productNames() {
        return $$('.inventory_item_name');
    }

    // Selector for product price elements
    get productPrices() {
        return $$('.inventory_item_price');
    }

    // Method to sort products by Name (A to Z)
    async sortProductsByNameAZ() {
        await this.sortingContainer.selectByAttribute('value', 'az');
    }

    // Method to sort products by Name (Z to A)
    async sortProductsByNameZA() {
        await this.sortingContainer.selectByAttribute('value', 'za');
    }

    // Method to check if products are sorted by Name (A to Z)
    async isProductListSortedByNameAZ() {
        const productNames = await this.getProductNamesText();
        const sortedNames = [...productNames].sort();
        return JSON.stringify(productNames) === JSON.stringify(sortedNames);
    }

    // Method to check if products are sorted by Name (Z to A)
    async isProductListSortedByNameZA() {
        const productNames = await this.getProductNamesText();
        const sortedNames = [...productNames].sort().reverse();
        return JSON.stringify(productNames) === JSON.stringify(sortedNames);
    }

    // Method to sort products by Price (Low to High)
    async sortProductsByPriceLowToHigh() {
        await this.sortingContainer.selectByAttribute('value', 'lohi');
    }

    // Method to sort products by Price (High to Low)
    async sortProductsByPriceHighToLow() {
        await this.sortingContainer.selectByAttribute('value', 'hilo');
    }

    // Method to check if products are sorted by Price (Low to High)
    async isProductListSortedByPriceLowToHigh() {
        const productPrices = await this.getProductPricesText();
        const sortedPrices = [...productPrices].sort((a, b) => parseFloat(a.replace('$', '')) - parseFloat(b.replace('$', '')));
        return JSON.stringify(productPrices) === JSON.stringify(sortedPrices);
    }

    // Method to check if products are sorted by Price (High to Low)
    async isProductListSortedByPriceHighToLow() {
        const productPrices = await this.getProductPricesText();
        const sortedPrices = [...productPrices].sort((a, b) => parseFloat(b.replace('$', '')) - parseFloat(a.replace('$', '')));
        return JSON.stringify(productPrices) === JSON.stringify(sortedPrices);
    }

    // Helper method to get text values of product names
    async getProductNamesText() {
        const names = [];
        const nameElements = await this.productNames;
        for (const element of nameElements) {
            names.push(await element.getText());
        }
        return names;
    }

    // Helper method to get text values of product prices
    async getProductPricesText() {
        const prices = [];
        const priceElements = await this.productPrices;
        for (const element of priceElements) {
            prices.push(await element.getText());
        }
        return prices;
    }
   
};
export default new InventoryPage();