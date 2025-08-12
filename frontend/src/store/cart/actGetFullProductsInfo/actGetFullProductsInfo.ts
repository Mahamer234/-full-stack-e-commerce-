import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../index";
import axios from "axios";
import type { Tproduct } from "@types/product";
const actGetFullProductsInfo = createAsyncThunk(
  "cart/actGetFullProductsInfo",
  async (_, thunkApi) => {
    const { fulfillWithValue, rejectWithValue, getState } = thunkApi;
    const state = getState() as RootState;
    const itemsIds = Object.keys(state.cart.items);
    const concatenatedId = itemsIds.map((id) => `id=${id}`).join("&");
    try {
      if (!itemsIds.length) {
        return fulfillWithValue([]);
      }
      const response = await axios.get<Tproduct[]>(
        `http://localhost:5000/products?${concatenatedId}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("un expected error ");
      }
    }
  }
);

export default actGetFullProductsInfo;
