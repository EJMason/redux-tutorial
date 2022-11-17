import { createReducer, createSelector } from '@reduxjs/toolkit';
import { find } from 'lodash';
import currency from 'currency.js';
import { foodItems } from './data/inventory';

const defaultState = {
  foodItems: foodItems,
  inCart: [],
};

export const groceryReducer = createReducer(defaultState, (builder) => {
  // TODO: Put our reducers here
  builder.addCase('ACTION_TYPE', (state, action) => {
    return {
      ...state,
    };
  });

  // add more reducers here
});

// ? ----------------------------- SELECTORS ----------------------------- ? //

const selectFoodItems = (state) => state.groceries.foodItems;
const selectInCart = (state) => state.groceries.inCart;

// TODO: Add the item subtotal selector

// TODO: Add the subtotal selector

// TODO: Add the tax calculation selector

//  -------------------------------- UTILITIES --------------------------------  //
/**
 * Helper function to find items by id
 */
function findFoodItemById(id) {
  return find(foodItems, ['id', id]);
}

function formatCurrency(v) {
  return currency(v).format();
}
