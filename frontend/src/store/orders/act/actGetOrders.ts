import { createAsyncThunk } from "@reduxjs/toolkit";
const actGetOrders = createAsyncThunk(
  "orders/actGetOrders",
  async (_, thunckAPI) => {}
);
export default actGetOrders;
