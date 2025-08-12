/* import { Cart } from "@assets/svg/cart.svg?react"; */
import { createSlice } from "@reduxjs/toolkit";
import type { Trecords } from "@types/product";
import type { shared } from "@types/shard";
import cartTotalquantitySelector from "./cartSelectors/cartTotalquantitySelector";
import actGetFullProductsInfo from "./actGetFullProductsInfo/actGetFullProductsInfo";
import type { Tproduct } from "@types/product";
import { cartTotalItemsPrice } from "./cartSelectors/cartTotalItemsPrice";
import { selectProductQuantityById } from "./cartSelectors/productQantityadd";
/* cart interface data */
interface Icart {
  items: { [key: string]: number };
  fullproductsInfo: Trecords[];
  loading: shared;
  error: string | null;
}
const initialState: Icart = {
  items: {},
  fullproductsInfo: [],
  loading: "idle",
  error: null,
};
const cartSlice = createSlice({
  name: "cart",

  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.items[action.payload]) {
        state.items[action.payload]++;
      } else {
        state.items[action.payload] = 1;
      }
    },
    resetCart: (state) => {
      state.items = {};
      state.fullproductsInfo = [];
    },
    removeItemFromCart: (state, action) => {
      delete state.items[action.payload];
      /* to delete item from cart page directely  in the same time  */
      state.fullproductsInfo = state.fullproductsInfo.filter(
        (i: Tproduct) => i.id != action.payload
      );
    },
    changeItemQuantity: (state, action) => {
      if (action.payload.id != undefined) {
        state.items[action.payload.id] = action.payload.quantity;
      }
    },
  },
  /* get fullproductsInfo*/
  extraReducers: (builder) => {
    builder.addCase(actGetFullProductsInfo.pending, (state) => {
      state.error = null;
      state.loading = "pending";
    });
    builder.addCase(actGetFullProductsInfo.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.fullproductsInfo = action.payload;
    });
    builder.addCase(actGetFullProductsInfo.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

/* cart items Quantity  */

export default cartSlice.reducer;
export const { addToCart, removeItemFromCart, changeItemQuantity, resetCart } =
  cartSlice.actions;
export {
  actGetFullProductsInfo,
  cartTotalItemsPrice,
  cartTotalquantitySelector,
  selectProductQuantityById,
};
