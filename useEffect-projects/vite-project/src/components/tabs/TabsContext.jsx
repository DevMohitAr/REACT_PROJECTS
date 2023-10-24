import React from "react";

const tabContext = React.createContext({
  activeTabValue: null,
  setActiveTabValue: () => {},
});

export const TabProvider = ({children})=> {
    const [activeTabValue,setActiveTabValue] = React.useState("tab-1");
  return <tabContext.Provider value={{activeTabValue,setActiveTabValue}}>{children}</tabContext.Provider>;
}


export const useGlobalContext = ()=>{
    return React.useContext(tabContext)
}