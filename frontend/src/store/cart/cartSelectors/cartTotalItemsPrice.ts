import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../index";
import type { Tproduct } from "@types/product";
const selectCartItems = (state: RootState) => state.cart.items;
const selectFullProductsInfo = (state: RootState) =>
  state.cart.fullproductsInfo;

/* selector for get total cart items price */
export const cartTotalItemsPrice = createSelector(
  [selectCartItems, selectFullProductsInfo],

  (selectCartItems, selectFullProductsInfo) => {
    const selectCartItemsKeys = Object.keys(selectCartItems);
    return selectCartItemsKeys.reduce((total, id) => {
      const productId = Number(id);
      const productfullinfo = selectFullProductsInfo.find(
        (p: Tproduct) => p.id === productId
      );
      if (productfullinfo) {
        return total + productfullinfo.price * selectCartItems[id];
      } else return total;
    }, 0);
  }
);
