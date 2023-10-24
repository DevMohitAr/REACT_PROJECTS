import React from 'react'

export default function useResize() {
  const [display, setDisplay] = React.useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });
  React.useEffect(() => {
    const handleResize = () => {
      setDisplay({ x: window.innerWidth, y: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return display
}
