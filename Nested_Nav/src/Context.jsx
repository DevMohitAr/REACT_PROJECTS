import React from "react";

const AppContext = React.createContext()

export const useGlobalContext = ()=>{
    return React.useContext(AppContext)
}

const AppProvider = ({children})=>{
    const [isSidebarOpen,setIsSidebarOpen] = React.useState(false);
    const [pageId,setPageId] = React.useState(false)
    const openSidebar = ()=>{
        setIsSidebarOpen(true)
    }
    const closeSidebar = ()=>{
        setIsSidebarOpen(false)
    }
    return <AppContext.Provider value={{isSidebarOpen,pageId,setPageId,openSidebar,closeSidebar}}>
            {children}
         </AppContext.Provider>
}
export default AppProvider