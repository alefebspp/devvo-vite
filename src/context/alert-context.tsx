import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { Ring } from "@/types/ring";

export interface AlertContextProps {
  alertIsOpen: boolean;
  setAlertIsOpen: Dispatch<SetStateAction<boolean>>;
  toDeleteRing: Ring | undefined;
  setToDeleteRing: Dispatch<SetStateAction<Ring | undefined>>;
}

interface AlertContextProviderProps {
  children: ReactNode;
}

const AlertContext = createContext<AlertContextProps>({} as AlertContextProps);

export function AlertContextProvider({ children }: AlertContextProviderProps) {
  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const [toDeleteRing, setToDeleteRing] = useState<Ring>();

  return (
    <AlertContext.Provider
      value={{
        alertIsOpen,
        setAlertIsOpen,
        toDeleteRing,
        setToDeleteRing,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}

export function useAlertContext(): AlertContextProps {
  const context = useContext(AlertContext) as AlertContextProps;

  if (!context) {
    throw new Error(
      "useAlertContext must be used within a AlertContextProvider"
    );
  }

  return context;
}

export default AlertContext;
