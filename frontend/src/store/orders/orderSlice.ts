import { createSlice } from "@reduxjs/toolkit";
import type { shared } from "../../types/shard";
interface IorderSliceState {
  loading: shared;
  error: string | null;
}
const initialState: IorderSliceState = {
  loading: "idle",
  error: null,
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
});

export default orderSlice.reducer;
