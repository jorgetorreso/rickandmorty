import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../../../client/src/features/counter/counterSlice';
import charactersReducer from './characters/characterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    characters: charactersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
