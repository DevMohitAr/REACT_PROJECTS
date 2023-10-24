import React from 'react'
import { useGlobalContext } from './LanguageContext';
export default function Greeting() {
const {translation} = useGlobalContext();


  return (
    <div>
      <h1>{translation("hello")}</h1>
      <p>{translation("welcome")}</p>
     
    </div>
  );
}