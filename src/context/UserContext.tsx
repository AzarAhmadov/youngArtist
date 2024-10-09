import React, { createContext, useContext, useState, useEffect } from "react";
import { checkAuth, logoutUser } from "../services/authService";

interface UserContextType {
   isLoggedIn: boolean;
   login: () => void;
   logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
   const context = useContext(UserContext);
   if (!context) {
      throw new Error("useUser must be used within a UserProvider");
   }
   return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
      setIsLoggedIn(checkAuth());
   }, []);

   const login = () => {
      setIsLoggedIn(true);
   };

   const logout = () => {
      logoutUser();
      setIsLoggedIn(false);
   };

   return (
      <UserContext.Provider value={{ isLoggedIn, login, logout }}>
         {children}
      </UserContext.Provider>
   );
};
