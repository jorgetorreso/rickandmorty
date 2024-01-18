import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { ICharacter, IFilters } from "@/interfaces/characters";

interface ICharactersState {
  data: ICharacter[];
  status: "idle" | "pending" | "succeeded" | "failed";
  toogleFavoriteStatus: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  filters: IFilters;
}

const initialState: ICharactersState = {
  data: [],
  status: "idle",
  toogleFavoriteStatus: "idle",
  error: null,
  filters: {},
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetch",
  async (filters: ICharactersState["filters"]) => {
    const userId = localStorage.getItem("userId")?.replaceAll('"', "");
    const response = await axios.get(
      "http://localhost:3000/find-all-characters",
      { params: { ...filters, userId } }
    );
    return response.data.data;
  }
);

export const fetchAddFavoriteCharacter = createAsyncThunk(
  "characters/addFavorite",
  async (characterId: string) => {
    const userId = localStorage.getItem("userId")?.replaceAll('"', "");
    const response = await axios.post("http://localhost:3000/add-favorite", {
      characterId,
      userId,
    });
    return response.data.data;
  }
);

export const fetchRemoveFavoriteCharacter = createAsyncThunk(
  "characters/removeFavorite",
  async (characterId: string) => {
    const userId = localStorage.getItem("userId")?.replaceAll('"', "");
    const response = await axios.post("http://localhost:3000/remove-favorite", {
      characterId,
      userId,
    });
    return response.data.data;
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
      })
      .addCase(fetchAddFavoriteCharacter.pending, (state) => {
        state.toogleFavoriteStatus = "pending";
      })
      .addCase(fetchAddFavoriteCharacter.fulfilled, (state) => {
        state.toogleFavoriteStatus = "succeeded";
      })
      .addCase(fetchAddFavoriteCharacter.rejected, (state) => {
        state.toogleFavoriteStatus = "failed";
      })
      .addCase(fetchRemoveFavoriteCharacter.pending, (state) => {
        state.toogleFavoriteStatus = "pending";
      })
      .addCase(fetchRemoveFavoriteCharacter.fulfilled, (state) => {
        state.toogleFavoriteStatus = "succeeded";
      })
      .addCase(fetchRemoveFavoriteCharacter.rejected, (state) => {
        state.toogleFavoriteStatus = "failed";
      });
  },
});

export default charactersSlice.reducer;

export const selectCharacters = (state: { characters: ICharactersState }) =>
  state.characters.data;

export const selectFavoriteStatus = (state: RootState) =>
  state.characters.toogleFavoriteStatus;

export const selectStatus = (state: RootState) => state.characters.status;
