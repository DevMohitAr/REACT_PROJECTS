import { useGlobalContext } from "./TabsContext";

export const TabTrigger = ({ value,children }) => {
  const { activeTabValue, setActiveTabValue } = useGlobalContext();
  
  const handleSetActiveTabValue = (e) => {
    setActiveTabValue(value)
  };
  return (
    <button
      onClick={handleSetActiveTabValue}
      className={`tab ${activeTabValue === value ? "active" : ""}`}
    >
     {children}
    </button>
  );
};
