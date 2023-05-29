import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toastArray,setToastArray,setToast,toast}) {
 
  return ( <ul className={styles.wrapper} style={{ listStyle: "none", padding: "12px" }}>
        {toastArray &&
          toastArray.map((el) => {
        
            return (
              <li
                key={el.id}
                className={styles.toastWrapper}
                style={{ marginBottom: "12px" }}
              >
                <Toast
                  toast={toast}
                  setToast={setToast}
                  variant={el.variant}
                  message={el.message}
                  toastArray={toastArray}
                  setToastArray={setToastArray}
                  id={el.id}
                />
              </li>
            );
          })}
      </ul>
    
  );
}

export default ToastShelf;
