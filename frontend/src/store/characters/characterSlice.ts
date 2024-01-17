import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { ICharacter, IFilters } from "@/interfaces/characters";

interface ICharactersState {
  data: ICharacter[];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  filters: IFilters;
}

const initialState: ICharactersState = {
  data: [],
  status: "idle",
  error: null,
  filters: {},
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetch",
  async (filters: ICharactersState["filters"]) => {
    const response = await axios.get(
      "http://localhost:3000/find-all-posts",
      { params: filters }
    );
    return response.data.results;
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as unknown as string;
      });
  },
});

export default charactersSlice.reducer;

export const selectCharacters = (state: { characters: ICharactersState }) =>
  state.characters.data;

export const selectStatus = (state: RootState) => state.characters.status;
