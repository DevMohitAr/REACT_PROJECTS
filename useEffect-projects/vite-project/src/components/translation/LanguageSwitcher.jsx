import React from 'react'
import { useGlobalContext } from './LanguageContext';
export default function LanguageSwitcher() {
  const {language,changeLanguage} =useGlobalContext()
 
  return (
    <div>
      <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
}