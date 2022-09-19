import { EntriesState } from ".";
import { Entry } from "../../interfaces";

type EntriesActionType =
  | { type: "CREATE ENTRY"; payload: Entry }
  | { type: "DELETE ENTRY " };

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
    default:
      return state;
  }
};
