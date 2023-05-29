import React from 'react';

import Button from '../Button';
import Toast from '../Toast/Toast';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground({message,setMessage,variant,setVariant,toast,setToast,toastArray,setToastArray}) {
  

 
  return (
    <>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>

        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((ele, i) => {
                return (
                  <React.Fragment key={i}>
                    <label htmlFor="vari">
                      <input
                        type="radio"
                        id="vari"
                        name="myVari"
                        value={ele}
                        checked={ele === variant}
                        onChange={(e) => setVariant(e.target.value)}
                      />
                      {ele}
                    </label>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button
                onClick={() => {
                  setToast(true);
                  const newToastArray = [...toastArray];
                  const myElement = {
                    variant: variant,
                    message: message,
                    id: crypto.randomUUID(),
                  };
                  newToastArray.push(myElement);
                  setToastArray(newToastArray);
                  setMessage("");
                }}
              >
                Pop Toast!
              </Button>
            </div>
          </div>
        </div>
      </div>
      {toast && (
        <ToastShelf
          message={message}
          setMessage={setMessage}
          variant={variant}
          setVariant={setVariant}
          toast={toast}
          setToast={setToast}
          toastArray={toastArray}
          setToastArray={setToastArray}
        />
      )}
    </>
  );
}

export default ToastPlayground;
