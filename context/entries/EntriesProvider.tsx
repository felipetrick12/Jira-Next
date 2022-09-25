import { FC, useReducer } from "react";
import { EntriesContext, entriesReducer } from ".";
import { Entry } from "../../interfaces";

import { v4 as uuidvv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: "!23",
      description,
      createdAt: Date.now(),
      status: "pending",
    };

    dispatch({
      type: "CREATE ENTRY",
      payload: newEntry,
    });
  };

  const updatedEntry = (newEntry: Entry) => {
    dispatch({
      type: "UPDATED ENTRY",
      payload: newEntry,
    });
  };

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
