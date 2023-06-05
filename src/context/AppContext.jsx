import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  let [MobileNavOpen, setMobileNavOpen] = useState(false);
  let [userInfo, setUserInfo] = useState({
    contactInfo: {
      name: "",
      email: "",
      tel: "",
      description: "",
    },
    services: [],
    completed: false,
  });

  return (
    <AppContext.Provider
      value={{
        MobileNavOpen,
        setMobileNavOpen,
        userInfo,
        setUserInfo,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
