import React from 'react';
import { TabTrigger } from './TabTrigger';
import { useGlobalContext } from './TabsContext';
function TabContent({value,children}) {
   const {activeTabValue} = useGlobalContext();
   
    if(value===activeTabValue){
    return <p>{children}</p>
    }

  
}
export default function Tabs() {
  return (
    <section>
      <h1>Tabs</h1>
      
        <div className="tabs">
          <TabTrigger value="tab-1">Tab 1</TabTrigger>
          <TabTrigger value="tab-2">Tab 2</TabTrigger>
          <TabTrigger value="tab-3">Tab 3</TabTrigger>
        </div>
        <TabContent value="tab-1">Tab Content 1</TabContent>
        <TabContent value="tab-2">Tab Content 2</TabContent>
        <TabContent value="tab-3">Tab Content 3</TabContent>
     
    </section>
  )
}









