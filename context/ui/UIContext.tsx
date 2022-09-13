import { createContext } from "react";

interface ContextProps {
  sideMenu: boolean;
}

export const UIContext = createContext({} as ContextProps);
