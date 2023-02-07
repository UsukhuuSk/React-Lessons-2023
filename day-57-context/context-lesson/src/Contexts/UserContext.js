import { createContext } from "react";

const UserContext = createContext(null);

//Provider
// Сүү ХХК. irgeded suu hangan niiluuldeg

const UserProvider = ({ children }) => {
  const userName = "Shine suu";
  return (
    <UserContext.Provider value={userName}>{children}</UserContext.Provider>
  );
};

//Consumer
//Jiriin irged

export { UserContext, UserProvider };
