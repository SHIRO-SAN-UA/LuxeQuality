import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Product Sorting on Inventory Page', () => {
    it('Should sort products by Name (A to Z)', async () => {
        // Log in as a standard user
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        // Sort products by Name (A to Z)
        await InventoryPage.sortProductsByNameAZ();

        // Verify that products are sorted correctly
        const isSorted = await InventoryPage.isProductListSortedByNameAZ();
        expect(isSorted).toBe(true);
    });

    it('Should sort products by Name (Z to A)', async () => {
        // Log in as a standard user
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        // Sort products by Name (Z to A)
        await InventoryPage.sortProductsByNameZA();

        // Verify that products are sorted correctly
        const isSorted = await InventoryPage.isProductListSortedByNameZA();
        expect(isSorted).toBe(true);
    });

    it('Should sort products by Price (Low to High)', async () => {
        // Log in as a standard user
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        // Sort products by Price (Low to High)
        await InventoryPage.sortProductsByPriceLowToHigh();

        // Verify that products are sorted correctly
        const isSorted = await InventoryPage.isProductListSortedByPriceLowToHigh();
        expect(isSorted).toBe(true);
    });

    it('Should sort products by Price (High to Low)', async () => {
        // Log in as a standard user
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        // Sort products by Price (High to Low)
        await InventoryPage.sortProductsByPriceHighToLow();

        // Verify that products are sorted correctly
        const isSorted = await InventoryPage.isProductListSortedByPriceHighToLow();
        expect(isSorted).toBe(true);
    });

});
