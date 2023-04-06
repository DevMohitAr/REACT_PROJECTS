import React from "react";

const GlobalContext = React.createContext()

export const useGlobalContext = ()=>{
return React.useContext(GlobalContext)
}

const AppContext = ({children})=>{
    const [isModalOpen,setIsModalOpen] = React.useState(false)
    const openModal = ()=>{
setIsModalOpen(true)
    }
    const closeModal = ()=>{
setIsModalOpen(false)
    }
    
    return <GlobalContext.Provider value={{isModalOpen,setIsModalOpen,openModal,closeModal}}>
        {children}
    </GlobalContext.Provider>
}

export default AppContext