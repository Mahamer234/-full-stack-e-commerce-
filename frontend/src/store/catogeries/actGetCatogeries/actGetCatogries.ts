import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetCatogeries = createAsyncThunk(
  "catogeries/actGetCatogeries",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axios.get("http://localhost:5000/category");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("un expected error");
      }
    }
  }
);

export default actGetCatogeries;
