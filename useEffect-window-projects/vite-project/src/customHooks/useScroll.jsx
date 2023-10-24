import React from "react";

export default function useScroll(divRef) {
  const [transform, setTransform] = React.useState(0);
   React.useEffect(() => {
     const observer = new IntersectionObserver(onIntersection, {
       root: null,
       rootMargin: "0px",
       threshold: 0.0,
     });
     function onIntersection(entries, observer) {
       entries.forEach((element) => {
         if (element.isIntersecting) {
           setTransform(0);
         } else {
           setTransform(100);
         }
       });
     }
     observer.observe(divRef.current);
     return () => {
       observer.disconnect();
     };
   }, []);
  return transform;
}
