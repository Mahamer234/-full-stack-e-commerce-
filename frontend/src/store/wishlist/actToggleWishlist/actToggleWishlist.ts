import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
import type { RootState } from "../..";

const actToggleWishlist = createAsyncThunk(
  "wishlist/actToggleWishlist",
  async (productId: number, thunkapi) => {
    const { rejectWithValue, getState } = thunkapi;
    const globalState = getState() as RootState;
    const userId = globalState.auth.user?.id;

    try {
      const res = await axios.get(
        `http://localhost:5000/wishlist?userId=${userId}&productId=${productId}`
      );

      if (res.data.length > 0) {
        const id = res.data[0].id;
        await axios.delete(`http://localhost:5000/wishlist/${id}`);
        return { type: "remove", productId };
      } else {
        await axios.post(`http://localhost:5000/wishlist`, {
          userId: userId,
          productId: productId,
        });
        return { type: "add", productId };
      }
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("un expected error ");
      }
    }
  }
);

export default actToggleWishlist;
