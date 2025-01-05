"use client";
import Wrapper from "../atoms/wrapper";
import OurServicesCard from "./our-services-card";
import useGetTranslations from "@/hooks/use-get-translations";

export default function Pipeline() {
  const translations = useGetTranslations();
  const ourServicesCard = translations.ourServices.services_1.steps;

  return (
    <Wrapper className="flex justify-center max-lg:hidden px-8">
      <Wrapper className="pt-[120px]">
        <div className="relative">
          <div className="flex items-center absolute top-10 right-[-90px]">
            <div className="w-[100px] h-[5px] bg-yellow-200 " />
            <div className="w-[28px] h-[28px] rounded-full bg-yellow-200 " />
          </div>
          <OurServicesCard
            number={ourServicesCard[0].number}
            cardTitle={ourServicesCard[0].title}
            cardDescription={ourServicesCard[0].description}
            image={ourServicesCard[0].image}
            alt={ourServicesCard[0].alt}
          />
        </div>

        <div className="relative mt-[120px]">
          <div className="flex items-center absolute top-10 right-[-90px]">
            <div className="w-[100px] h-[5px] bg-yellow-200 " />
            <div className="w-[28px] h-[28px] rounded-full bg-yellow-200 " />
          </div>
          <OurServicesCard
            number={ourServicesCard[2].number}
            cardTitle={ourServicesCard[2].title}
            cardDescription={ourServicesCard[2].description}
            image={ourServicesCard[2].image}
            alt={ourServicesCard[2].alt}
          />
        </div>
      </Wrapper>

      <Wrapper className="flex flex-col items-center">
        <p className="bg-yellow-500 text-center p-4 min-w-fit w-[150px]">
          {translations.ourServices.ourPipeline}
        </p>
        <div className="h-[785px] w-[5px] bg-yellow-500"></div>
      </Wrapper>

      <Wrapper className="pt-[340px]">
        <div className="relative">
          <div className="flex items-center absolute top-10 left-[-90px]">
            <div className="w-[28px] h-[28px] rounded-full bg-yellow-200 " />
            <div className="w-[100px] h-[5px] bg-yellow-200 " />
          </div>
          <OurServicesCard
            number={ourServicesCard[1].number}
            cardTitle={ourServicesCard[1].title}
            cardDescription={ourServicesCard[1].description}
            image={ourServicesCard[1].image}
            alt={ourServicesCard[1].alt}
          />
        </div>

        <div className="relative mt-[120px]">
          <div className="flex items-center absolute top-10 left-[-90px]">
            <div className="w-[28px] h-[28px] rounded-full bg-yellow-200 " />
            <div className="w-[100px] h-[5px] bg-yellow-200 " />
          </div>
          <OurServicesCard
            number={ourServicesCard[3].number}
            cardTitle={ourServicesCard[3].title}
            cardDescription={ourServicesCard[3].description}
            image={ourServicesCard[3].image}
            alt={ourServicesCard[3].alt}
          />
        </div>
      </Wrapper>
    </Wrapper>
  );
}
