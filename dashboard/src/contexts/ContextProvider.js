import { upArrow } from "@syncfusion/ej2-react-grids";
import { itemClick } from "@syncfusion/ej2/treemap";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  cart: false,
  chat: false,
  notification: false,
  userProfile: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (itemClicked) => {
    setIsClicked((prev) => ({
      ...initialState,
      [itemClicked]: !prev[itemClicked],
    }));
  };
  return (
    <StateContext.Provider
      value={{
        thisObject: "will be passed through every component",
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
