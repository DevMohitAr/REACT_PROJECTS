import React from 'react'
import { AppNav } from './AppNav'
import { Outlet } from "react-router-dom";
export const Sidebar = () => {
  return (
    <div style={{ flex: "1", backgroundColor: "#27272a", flexWrap: "wrap" }}>
      <AppNav />
      <Outlet />
    </div>
  );
}
