import React from 'react'
import { Sidebar } from './Sidebar';
import { Map } from './Map';

export const AppLayout = () => {
  
  return (
    <div style={{display:"flex",maxWidth:"90%",height:"90vh",margin:"0 auto",border:"2px solid"}}>
   <Sidebar />
   <Map/>
    </div>
  );
}
