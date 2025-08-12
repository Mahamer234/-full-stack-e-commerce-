import { createSlice } from "@reduxjs/toolkit";
import type { Tproduct } from "@types/product";
import type { shared } from "@types/shard";
import actGetProductsByPrefix from "./actGetProductsByPrefix/actGetProducsByPrefix";

interface IProductState {
  records: Tproduct[];
  loading: shared;
  error: string | null;
}
const initialState: IProductState = {
  records: [],
  loading: "idle",
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Action to reset products state
    // This can be useful when you want to clear the products data
    resetProducts: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(actGetProductsByPrefix.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actGetProductsByPrefix.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.records = action.payload;
      })
      .addCase(actGetProductsByPrefix.rejected, (state, action) => {
        if (action.payload && typeof action.payload === "string") {
          state.error = action.payload;
          state.loading = "failed";
        } else {
          state.error = "An unexpected error occurred";
          state.loading = "failed";
        }
      });
  },
});
export default productsSlice.reducer;
export const { resetProducts } = productsSlice.actions;
export { actGetProductsByPrefix };
