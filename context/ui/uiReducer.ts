import { UIState } from "./";

type UIActionType =
  | { type: "OPEN SIDEBAR" }
  | { type: "CLOSE SIDEBAR" }
  | { type: "CHANGE UI"; payload: boolean };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "OPEN SIDEBAR":
      return {
        ...state,
        sideMenu: true,
      };
    case "CLOSE SIDEBAR":
      return {
        ...state,
        sideMenu: false,
      };
    case "CHANGE UI":
      return {
        ...state,
        isAdding: action.payload,
      };
    default:
      return state;
  }
};
