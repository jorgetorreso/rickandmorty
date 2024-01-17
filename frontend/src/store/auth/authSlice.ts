import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "@/interfaces/auth";
import { RootState } from "../store";

interface IAuthState {
  user: IUser | null;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IAuthState = {
  user: null,
  status: "idle",
  error: null,
};

export const fetchUser = createAsyncThunk("auth/fetch", async () => {
  const response = await axios.post("http://localhost:3000/create/user");
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as unknown as string;
      });
  },
});

export default authSlice.reducer;

export const selectUser = (state: RootState) => state.auth.user;
