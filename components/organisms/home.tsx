'use client'
import Link from "next/link";
import Wrapper from "../atoms/wrapper";
import { openWhatsapp } from "@/helpers/openWhatsapp";
import useGetTranslations from "@/hooks/use-get-translations";

export default function Home() {
  const translations = useGetTranslations();
  return (
    <section
      className="w-full  text-yellow-50  relative overflow-hidden bg-[#010207]"
      id="home"
    >
      <section className="max-w-[1280px] px-4 mx-auto h-fit pb-20 pt-10  flex flex-col items-center lg:h-[calc(100dvh-92px)] md:px-8 lg:px-10 lg:justify-center">
        <Wrapper className="w-full flex flex-col items-center text-center lg:text-left lg:items-start  z-10 ">
          <h1 className="text-shadow text-4xl font-semibold leading-relaxed md:text-8xl md:leading-[1.2] xl:text-[100px]">
            {translations.home.title}
          </h1>
          <div className="text-base font-light leading-relaxed mt-3 max-w-[400px] md:max-w-[700px] md:text-2xl xl:text-2xl  xl:mt-5">
            {translations.home.subtitle}
          </div>

          <div className="w-full flex flex-col items-center justify-center lg:flex-row lg:gap-10 lg:justify-start xl:gap-10 xl:mt-5">
            <button
              className="bg-yellow-500 hover:bg-yellow-700 max-w-[300px] py-2 h-[74px] w-full rounded-full mt-6 font-semibold xl:text-xl z-10"
              onClick={() => openWhatsapp()}
            >
              {translations.home.buttonLabel}
            </button>

            <Link className="w-full max-w-[400px]" href="#our-services">
              <button className=" bg-yellow-50 text-yellow-500 max-w-[300px]  py-5 w-full rounded-full mt-6 font-semibold xl:text-xl hover:bg-gray-800 hover:border-none">
                {translations.home.buttonLabel2}
              </button>
            </Link>
          </div>
        </Wrapper>
        <img
          className="absolute  1440:top-0 h-auto bg-cover max-lg:hidden"
          src={`bg-home.webp`}
          alt={translations.home.alt}
        />
      </section>

      <div className="w-full mt-[-50px] relative lg:hidden">
        <img src={`muda.webp`} alt={translations.home.alt} className="w-full" />
        <div className="w-full h-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-[#010207]" />
      </div>
    </section>
  );
}
