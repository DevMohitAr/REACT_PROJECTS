import React from "react";
import { useGlobalContext } from "./context";

import sublinks from "./data";
const App = () => {
  const { pageId, setPageId } =
    useGlobalContext();
  const listRef = React.useRef(null);
  const subItem = sublinks.find((item) => item.pageId === pageId);

  const handleNew = (event) => {
    const { clientX, clientY } = event;

    const { left, right, bottom } = listRef.current.getBoundingClientRect();

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom) {
      setPageId(null);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "#A176E8",
          padding: "16px",
          color: "#FAFAFA",
          cursor:"pointer"
        }}
      >
        {sublinks.map((link) => {
          return (
            <h5 onMouseEnter={() => setPageId(link.pageId)} key={link.pageId}>
              {link.page}
            </h5>
          );
        })}
      </div>

      {subItem && (
        <div
          style={{
            boxShadow: "2px 4px 8px rgba(0,0,0,0.5)",
            width: "90%",
            padding: "24px",
            maxWidth: `1280px`,
            margin: "5rem auto",
            backgroundColor: "#1B1923",
            color: "#A176E8",
            display: "grid",
            gridTemplateColumns: `${
              subItem?.links?.length > 3 ? "1fr 1fr" : "1fr"
            }`,
            cursor:"pointer",
            gap: "1rem",
          }}
          onMouseLeave={handleNew}
          ref={listRef}
        >
          {subItem?.links?.map((link) => {
            const { id, label } = link;
            return <h4 key={id}>{label}</h4>;
          })}
        </div>
      )}
    </>
  );
};
export default App;
