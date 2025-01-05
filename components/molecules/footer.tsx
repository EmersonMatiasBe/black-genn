"use client";
import { openLink } from "@/helpers/open-link";
import useGetTranslations from "@/hooks/use-get-translations";

export default function Footer() {
  const translations = useGetTranslations();

  return (
    <footer className="bg-gray-800 w-full text-gray-200 py-10">
      <div className="px-4 mb-10 lg:mb-0  flex flex-col items-center lg:flex-col lg:justify-center lg:px-40">
        <div className="flex flex-col mt-10 lg:mt-0 items-center gap-5">
          <p>{translations.footer.socialMedia}</p>
          <div className="flex flex-row items-center  gap-8 px-4 fill-gray-200 lg:max-w-[500px]">
            {translations.footer.items.map(({ icon, url }, index) => (
              <div
                className="flex  items-center text-center max-w-[500px]"
                key={index}
              >
                <button
                  className="bg-yellow-700 p-2 rounded-full"
                  onClick={() => openLink(url)}
                >
                  {icon}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 px-4 w-full text-center lg:gap-10 lg:py-10 lg:px-40 ">
        <div className="max-w-[1000px]">
          <p className="text-center">{translations.footer.description}</p>
        </div>

        <div className="mt-10 text-center flex flex-col gap-2 lg:mt-0 ">
          <p>Razão Social - Blackgenn Inova Simples LTDA</p>
          <p>CNPJ: 43.496.718/0001-23</p>
        </div>
      </div>

      <div className="bg-gray-400 w-full h-[1px] my-5"></div>

      <p className="text-center">2024 - BlackGenn</p>
    </footer>
  );
}
