import { createContext, useState } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [openNav, setOpenNav] = useState(false);
  const ToogleOpen = () => {
    setOpenNav(!openNav);
  };
  return (
    <NavContext.Provider value={{ openNav, ToogleOpen }}>
      {children}
    </NavContext.Provider>
  );
};
