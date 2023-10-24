import React from 'react'

export default function useMouse(isEnabled) {
     const [display, setDisplay] = React.useState({ width: 0, height: 0 });
       React.useEffect(() => {
         if (isEnabled) {
           const handleMove = (e) => {
             setDisplay({ width: e.clientX, height: e.clientY });
           };
           window.addEventListener("mousemove", handleMove);
           return () => {
             window.removeEventListener("mousemove", handleMove);
           };
         }
       }, [isEnabled]);
  return display
}
