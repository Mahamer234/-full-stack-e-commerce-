import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../..";
/* if need selector take parameter  use function return createselector and pass parameter  */
export const selectCartItems = (state: RootState) => state.cart.items;

export const selectProductQuantityById = (id: number) => {
  createSelector([selectCartItems], (items) => {
    return items[id] || 0;
  });
};
