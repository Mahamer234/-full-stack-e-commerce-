import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../index";

const cartTotalquantitySelector = createSelector(
  [(state: RootState) => state.cart.items],
  (items) => {
    return Object.values(items).reduce((total, item) => total + item, 0);
  }
);
export default cartTotalquantitySelector;
