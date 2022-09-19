import { FC, useReducer } from "react";
import { EntriesContext, entriesReducer } from ".";
import { Entry } from "../../interfaces";

import { v4 as uuidvv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidvv4(),
      description: "jejejejej hacer esto",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidvv4(),
      description: " hacer esto",
      status: "in-progress",
      createdAt: Date.now() - 100000,
    },
    {
      _id: uuidvv4(),
      description: "jejejejej r hecho esto",
      status: "finished",
      createdAt: Date.now() - 10000,
    },
  ],
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

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
