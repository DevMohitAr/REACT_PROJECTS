import React from 'react'
 const AppContext = React.createContext()

export const AppProvider = ({children})=>{
     const [message, setMessage] = React.useState("");
     const [variant, setVariant] = React.useState("notice");
     const [toast, setToast] = React.useState(false);
     const [toastArray, setToastArray] = React.useState([]);
    return <AppContext.Provider value ={{message,setMessage,variant,setVariant,toast,setToast,toastArray,setToastArray}} >
        {children}
        </AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return React.useContext(AppContext)
}

