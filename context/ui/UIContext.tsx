import { createContext } from "react";

interface ContextProps {
  sideMenu: boolean;
  isAdding: boolean;
  isDragging: boolean;

  //methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
  setStartDraging: () => void;
  setEndDraging: () => void;
}

export const UIContext = createContext({} as ContextProps);
