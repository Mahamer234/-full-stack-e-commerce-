import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const actRegister = createAsyncThunk(
  "auth/actRegister",
  async (data: RegisterFormData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/register", data);
      return response.data; // Assuming the API returns user data on successful registration
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      }
      return rejectWithValue("un expected error ");
    }
  }
);

export default actRegister;
