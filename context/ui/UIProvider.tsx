import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sideMenu: boolean;
  isAdding: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenu: false,
  isAdding: false,
  isDragging: false,
};

export const UIProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "OPEN SIDEBAR" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "CLOSE SIDEBAR" });
  };

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: "CHANGE UI", payload: isAdding });
  };

  const setStartDraging = () => {
    dispatch({ type: "START DRAGGING" });
  };

  const setEndDraging = () => {
    dispatch({ type: "END DRAGGING" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        setStartDraging,
        setEndDraging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
