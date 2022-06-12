import { createContext, useContext } from "react";

interface HeaderContextInterface {
  handleToggleMenu: () => void;
  showMenu: boolean;
}

interface HeaderProviderProps {
  value: any;
  children: React.ReactNode;
}

const HeaderContext = createContext<HeaderContextInterface | undefined>(undefined);
const HeaderProvider = ({ value, children, ...props }: HeaderProviderProps) => (
  <HeaderContext.Provider value={value} {...props}>
    {children}
  </HeaderContext.Provider>
);

const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (typeof context === "undefined")
    throw new Error("useHeaderContext must be used within HeaderProvider");
  return context;
};
export { HeaderProvider, useHeaderContext };
