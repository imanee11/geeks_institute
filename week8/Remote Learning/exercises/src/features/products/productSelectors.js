import { createSelector } from '@reduxjs/toolkit';

export const selectAllProducts = (state) => state.products.products;

export const selectFilteredProducts = (category, inStockOnly, priceRange, sortBy) =>
    createSelector([selectAllProducts], (products) => {
        let filtered = [...products];

        if (category) {
            filtered = filtered.filter((product) => product.category === category);
        }

        if (inStockOnly) {
            filtered = filtered.filter((product) => product.inStock);
        }

        if (priceRange.length === 2) {
            filtered = filtered.filter(
                (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
            );
        }

        if (sortBy === 'price') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'name') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }

        return filtered;
    });
