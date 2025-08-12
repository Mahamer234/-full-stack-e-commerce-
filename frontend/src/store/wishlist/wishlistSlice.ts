import { createSlice } from "@reduxjs/toolkit";
import type { shared } from "../../types/shard";
import actToggleWishlist from "./actToggleWishlist/actToggleWishlist";
import actGetWishllistProducts from "./actGetWishllistProducts/actGetWishllistProducts";
import type { Tproduct } from "../../types/product";
import reducer from "../products/productSlice";
import { logout } from "../auth/authSlice";
/* intialstate  */
interface Iinstalstate {
  items: number[];
  wishListProducts: Tproduct[];
  loading: shared;
  error: string | null;
}
const initialState: Iinstalstate = {
  items: [],
  loading: "idle",
  error: null,
  wishListProducts: [],
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* ---------- handle act toggle wishlist --------- */
    builder.addCase(actToggleWishlist.pending, (state) => {
      state.error = null;
      state.loading = "pending";
    });
    builder.addCase(actToggleWishlist.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload.type === "add") {
        state.items.push(action.payload.productId);
      } else if (action.payload.type === "remove") {
        state.items = state.items.filter(
          (item) => item !== action.payload.productId
        );
      }
    });
    builder.addCase(actToggleWishlist.rejected, (state, action) => {
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
        state.loading = "failed";
      } else {
        state.error = "An unexpected error occurred";
        state.loading = "failed";
      }
    });
    /* ---------- handle actGetWishllistProducts --------- */
    builder.addCase(actGetWishllistProducts.pending, (state) => {
      state.error = null;
      state.loading = "pending";
    });
    builder.addCase(actGetWishllistProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload.dataType === "productsFullInfo") {
        state.wishListProducts = action.payload.data as Tproduct[];
      } else {
        state.items = action.payload.data as number[];
      }
    });
    builder.addCase(actGetWishllistProducts.rejected, (state, action) => {
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
        state.loading = "failed";
      } else {
        state.error = "An unexpected error occurred";
        state.loading = "failed";
      }
    });
    builder.addCase(logout, (state) => {
      state.items = [];
    });
  },
});
export default wishlistSlice.reducer;
export { actToggleWishlist, actGetWishllistProducts };
