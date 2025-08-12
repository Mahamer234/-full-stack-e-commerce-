import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Ilogin {
  email: string;
  password: string;
}
const actLogin = createAsyncThunk(
  "auth/actLogin",
  async (data: Ilogin, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: data.email,
        password: data.password,
      });
      console.log(response.data);
      const { accessToken, user } = response.data;
      return { accessToken, user };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("un expected error");
      }
    }
  }
);
export default actLogin;
