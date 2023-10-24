import React from 'react'

const languageContext = React.createContext({
  language: "en",
  changeLanguage: () => {},
  translation: (key) => key,
});

export const LanguageProvider = ({ children })=> {
  const [language, setLanguage] = React.useState("en");
  const [translations, setTranslation] = React.useState({
    en: {
      hello: "Hello!",
      welcome: "Welcome to our app!",
    },
    es: {
      hello: "¡Hola!",
      welcome: "¡Bienvenido a nuestra aplicación!",
    },
    fr: {
      hello: "Bonjour !",
      welcome: "Bienvenue dans notre application !",
    },
    de: {
      hello: "Hallo!",
      welcome: "Willkommen in unserer App!",
    },
  });

 

  const changeLanguage = (value) => {
    setLanguage(value)
  };

  const translation = (key) => {
    const myObj = translations[language]
    return myObj[key]
  };

  return (
    <languageContext.Provider value={{translations, language, changeLanguage, translation }}>
      {children}
    </languageContext.Provider>
  );
}

export const useGlobalContext = ()=>{
    return React.useContext(languageContext)
}