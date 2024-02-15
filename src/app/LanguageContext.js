"use client";
import { createContext, useReducer } from "react";

export const LanguageContext = createContext(null);
export const LanguageDispatchContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, dispatch] = useReducer(languageReducer, initialLanguage);
  return (
    <LanguageContext.Provider value={language}>
      <LanguageDispatchContext.Provider value={dispatch}>
        {children}
      </LanguageDispatchContext.Provider>
    </LanguageContext.Provider>
  );
}

function languageReducer(language, action) {
  switch (action.type) {
    case "ch": {
      return "ch";
    }
    case "en": {
      return "en";
    }
    default: {
      throw Error("Not supported Language" + action.type);
    }
  }
}

const initialLanguage = "ch";
