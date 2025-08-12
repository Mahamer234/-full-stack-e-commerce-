import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../..";
import axios from "axios";
const actPlaceOrders = createAsyncThunk(
  "orders/actPlaceOrders",
  async (totalProductItemsPrice: number, thunkapi) => {
    const { rejectWithValue, getState } = thunkapi;
    const globalState = getState() as RootState;
    const userId = globalState.auth.user?.id;

    const orderItems = globalState.cart.fullproductsInfo.map((el) => ({
      id: el.id,
      title: el.title,
      price: el.price,
      img: el.img,
      quantity: globalState.cart.items[el.id],
    }));
    try {
      const orderData = {
        userId: userId,
        orderItems: orderItems,
        totalPrice: totalProductItemsPrice,
      };

      const res = await axios.post(`http://localhost:5000/orders`, orderData);
      if (res.status === 201) {
        console.log("Order placed successfully:", res.data);
        return res.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      }
      return rejectWithValue("Unexpected error occurred while placing order");
    }
  }
);
export default actPlaceOrders;
