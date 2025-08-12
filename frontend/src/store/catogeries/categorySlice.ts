import { createSlice } from "@reduxjs/toolkit";
import actGetCatogeries from "./actGetCatogeries/actGetCatogries";
import type { Tcatogery } from "../../types/catogery";
interface IcatogeriesState {
  records: Tcatogery[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: null | string;
}
const initialState: IcatogeriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "catogeries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCatogeries.pending, (state) => {
      state.error = null;
      state.loading = "pending";
    });
    builder.addCase(actGetCatogeries.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetCatogeries.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export default categoriesSlice.reducer;
export { actGetCatogeries };
