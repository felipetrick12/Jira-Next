import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sideMenu: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenu: false,
};

export const UIProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  return (
    <UIContext.Provider
      value={{
        sideMenu: false,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
