import { UIState } from "./";

type UIActionType =
  | { type: "OPEN SIDEBAR" }
  | { type: "CLOSE SIDEBAR" }
  | { type: "CHANGE UI"; payload: boolean }
  | { type: "START DRAGGING" }
  | { type: "END DRAGGING" };

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
    case "START DRAGGING":
      return {
        ...state,
        isDragging: true,
      };
    case "END DRAGGING":
      return {
        ...state,
        isDragging: false,
      };
    default:
      return state;
  }
};
