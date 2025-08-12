import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Tproduct } from "@types/product";
import axios from "axios";

const actGetProductsByPrefix = createAsyncThunk(
  "productsSlice/actGetProductsByPrefix",
  async (prefix, thunkApi) => {
    try {
      const response = await axios.get<Tproduct[]>(
        `http://localhost:5000/products?cat_prefix=${prefix}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue(
          error.response?.data.message || error.message
        );
      } else {
        return thunkApi.rejectWithValue("An unexpected error occurred");
      }
    }
  }
);
export default actGetProductsByPrefix;
