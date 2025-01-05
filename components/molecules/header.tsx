"use client";
import LogoIcon from "@/assets/icons/logo-icon";
import ButtonLanguage from "../atoms/button-language";
import Link from "next/link";
import SideMenu from "./side-menu";
import useGetTranslations from "@/hooks/use-get-translations";

export default function Header() {
  const translations = useGetTranslations();

  return (
    <div className="w-full bg-dark shadow-[0_0_8px_4px_rgba(0,0,0,1)] border-y-2 border-gray-800 z-[999]">
      <header className="max-w-[1280px] h-[88px] mx-auto flex items-center gap-6 px-4 justify-between md:px-8 lg:px-10">
        <Link href="#home">
          <LogoIcon className="h-10 md:h-14 w-auto" />
        </Link>

        <div
          className="flex gap-4 items-center"
        >
          <div className="flex gap-6 mr-5 max-1000:hidden">
            {translations.sideMenu.sections.map(({ id, label }) => (
              <Link
                href={`#${id}`}
                key={id}
                className="text-yellow-50 font-bold hover:text-yellow-500"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex gap-2 md:gap-4">
            <ButtonLanguage label="pt" />
            <ButtonLanguage label="en" />
          </div>

          <SideMenu />
        </div>
      </header>
    </div>
  );
}
