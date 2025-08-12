import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
import type { RootState } from "../../index";
import type { Tproduct } from "../../../types/product";

type dataType = "productIds" | "productsFullInfo";
const actGetWishllistProducts = createAsyncThunk(
  "wishlist/actGetWishllistProducts",
  async (dataType: dataType, thunkapi) => {
    const { rejectWithValue, getState } = thunkapi;
    const globalState = getState() as RootState;
    const user = globalState.auth.user?.id;

    try {
      /* if i auth get users Wishlist  */
      const userWishlist = await axios.get<{ productId: number }[]>(
        `http://localhost:5000/wishlist?userId=${user}`
      );
      /* if user not have wishlist return empty  */
      if (!userWishlist.data.length) {
        return { dataType: "productsFullInfo", data: [] };
      }
      /* if i need products wishlist ids only  */
      if (dataType === "productIds") {
        const concatenatedId = userWishlist.data.map((el) => el.productId);
        /* return datatype and data for manibulate in slice */
        return { dataType: "productIds", data: concatenatedId };
      } else {
        /* else collect products ids and goto fetch them */
        const concatenatedIds = userWishlist.data
          .map((el) => `id=${el.productId}`)
          .join("&");

        console.log(concatenatedIds);
        const response = await axios.get<Tproduct[]>(
          `http://localhost:5000/products?${concatenatedIds}`
        );
        return { dataType: "productsFullInfo", data: response.data };
      }
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("un expected value");
      }
    }
  }
);

export default actGetWishllistProducts;
