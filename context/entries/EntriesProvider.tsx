import { FC, useEffect, useReducer } from "react";
import { EntriesContext, entriesReducer } from ".";
import { Entry } from "../../interfaces";
import { entriesApi } from "../../config";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = async (description: string) => {
    try {
      const { data } = await entriesApi.post<Entry>("/entries", {
        description,
      });

      dispatch({
        type: "CREATE ENTRY",
        payload: data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const updatedEntry = async ({ _id, description, status }: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });
      dispatch({
        type: "UPDATED ENTRY",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");

    dispatch({
      type: "REFRESH DATA",
      payload: data,
    });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updatedEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
