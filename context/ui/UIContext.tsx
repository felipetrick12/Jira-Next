import { createContext } from "react";

interface ContextProps {
  sideMenu: boolean;
  isAdding: boolean;

  //methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
