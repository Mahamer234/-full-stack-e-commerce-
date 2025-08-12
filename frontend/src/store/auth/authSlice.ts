import { createSlice } from "@reduxjs/toolkit";
import type { shared } from "../../types/shard";
import actRegister from "./actRegister/actRegistrer";
import actLogin from "./actLogin/actLogin";
/*  inerface for data login  */
interface AuthState {
  accessToken: string | null;
  user: {
    email: string;
    firstName: string;
    lastName: string;
    id: number;
  } | null;
  loading: shared;
  error: string | null;
}
/* initial state for login data  */
const initialState: AuthState = {
  accessToken: null,
  user: null,
  loading: "idle",
  error: null,
};
/* authintication slice  */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /* logout from website  */
    logout: () => {
      return initialState; // Reset to initial state on logout
    },
  },
  extraReducers: (builder) => {
    builder
      /* -------------- registering -------- */
      .addCase(actRegister.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actRegister.fulfilled, (state) => {
        state.loading = "succeeded";
        state.error = null;
      })
      .addCase(actRegister.rejected, (state, action) => {
        state.loading = "failed";
        if (action.payload && typeof action.payload === "string")
          state.error = action.payload;
      })
      /* -------------- login  -------- */

      .addCase(actLogin.pending, (state) => {
        state.error = null;
        state.loading = "pending";
      })
      .addCase(actLogin.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
      })
      .addCase(actLogin.rejected, (state, action) => {
        state.loading = "failed";
        if (action.payload && typeof action.payload === "string") {
          state.error = action.payload;
        }
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
export { actRegister, actLogin };
