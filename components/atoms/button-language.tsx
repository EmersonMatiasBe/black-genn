"use client";

import { useMyContext } from "@/context/store";

type ButtonLanguageProps = {
  label: Language;
};

export default function ButtonLanguage({ label }: ButtonLanguageProps) {
  const { language, setLanguage } = useMyContext();

  function setNewLanguage(){
    localStorage.setItem('language', label)
    setLanguage(label)
    document.documentElement.lang  = label
  }


  return (
    <button
      data-active={language === label}
      className="bg-yellow-500 hover:bg-yellow-700 rounded-full p-2 font-bold text-xs data-[active=false]:opacity-50"
      onClick={() => setNewLanguage()}
    >
      {label.toLocaleUpperCase()}
    </button>
  );
}
