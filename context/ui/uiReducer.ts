import { UIState } from "./";

type UIActionType = { type: "OPEN SIDEBAR" } | { type: "CLOSE SIDEBAR" };

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
    default:
      return state;
  }
};
