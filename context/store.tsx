"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface ContextProps {
  language: "pt" | "en";
  setLanguage: Dispatch<SetStateAction<"pt" | "en">>;
}

const GlobalContext = createContext<ContextProps>({
  language: "pt",
  setLanguage: () => { },
});

export function useMyContext() {
  return useContext(GlobalContext);
}


export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage]
  );

  useEffect(() => {
    const languageSaved = localStorage.getItem("language") as 'pt' | 'en';
    if (!languageSaved) {
      const pageLanguage = document.documentElement.lang as 'pt' | 'en'
      localStorage.setItem('language', pageLanguage)
      setLanguage(pageLanguage)
      return
    }

    document.documentElement.lang = languageSaved
    setLanguage(languageSaved)
  }, [])

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
