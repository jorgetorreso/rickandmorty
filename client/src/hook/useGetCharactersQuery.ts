import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/hooks";
import { useEffect } from "react";
import {
  fetchCharacters,
  selectCharacters,
  selectStatus,
} from "@/services/characterSlice";

export function useGetCharactersQuery(filter: any) {
  const dispatch = useAppDispatch();
  // select the current status from the store state for the provided name
  const status = useSelector(selectStatus);
  // select the current data from the store state for the provided name
  const data = useSelector(selectCharacters);
  useEffect(() => {
    // upon mount or name change, if status is uninitialized, send a request
    // for the pokemon name
    if (status === undefined) {
      dispatch(fetchCharacters(filter));
    }
  }, [status, filter, dispatch]);

  // derive status booleans for ease of use
  const isUninitialized = status === undefined;
  const isLoading = status === "pending" || status === "idle";
  const isError = status === "failed";
  const isSuccess = status === "succeeded";

  // return the import data for the caller of the hook to use
  return { data, isUninitialized, isLoading, isError, isSuccess };
}
