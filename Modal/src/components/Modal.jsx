import React from 'react'
import { useGlobalContext } from '../Context'
import {FaWindowClose} from 'react-icons/fa'

export const Modal = () => {
    const {isModalOpen,setIsModalOpen,openModal,closeModal} = useGlobalContext()
  return (
    <>
      <button
        onClick={openModal}
        style={{
          textTransform: "capitalize",
          fontSize: "2.5rem",
          padding: "24px 32px",
          backgroundColor: "#C6D4B6",
          color: "#275041",
          borderRadius:"15px",
          border:"none",
          cursor:"pointer"
        }}
      >
        modal
      </button>
      {isModalOpen && (
        <div
          style={{
            position: "absolute",
            inset: "0px",
            background: "#C5D4B6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "90%",
              height: "30vh",
              maxWidth: "480px",
              background: "#1D3D28",
              position: "relative",
              display: "grid",
              placeContent: "center",
              borderRadius: "15px",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                color: "#C6D4B7",
                cursor:"pointer"
              }}
            >
              <FaWindowClose />
            </button>
            <p
              style={{
                color: "#C6D4B7",
                textTransform: "capitalize",
                fontSize: "2rem",
              }}
            >
              modal
            </p>
          </div>
        </div>
      )}
    </>
  );
}
