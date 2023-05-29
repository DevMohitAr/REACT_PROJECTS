import React from 'react';
import { useGlobalContext } from '../ToastProvider/ToastProvider';
import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';


function App() {
  const {message,setMessage,variant,setVariant,toast,setToast,toastArray,setToastArray}=useGlobalContext()
  
  return (
    <>
      <ToastPlayground
        message={message}
        setMessage={setMessage}
        variant={variant}
        setVariant={setVariant}
        toast={toast}
        setToast={setToast}
        toastArray={toastArray}
        setToastArray={setToastArray}
      />
      <Footer />
    </>
  );
}

export default App;
