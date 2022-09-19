import { EntriesState } from ".";
import { Entry } from "../../interfaces";

type EntriesActionType =
  | { type: "CREATE ENTRY"; payload: Entry }
  | { type: "UPDATED ENTRY"; payload: Entry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "CREATE ENTRY":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case "UPDATED ENTRY":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status === action.payload.status;
            entry.description === action.payload.description;
          }
          return entry;
        }),
      };
    default:
      return state;
  }
};
