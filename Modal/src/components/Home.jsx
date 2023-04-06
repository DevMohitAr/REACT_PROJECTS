import React from 'react'
import { Modal } from './Modal'


export const Home = () => {
  return (
    <section
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        backgroundColor: "#275041",
      }}
    >
      <Modal />
    </section>
  );
}
