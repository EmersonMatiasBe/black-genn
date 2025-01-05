import Service from "../molecules/service";
import OurServicesCard from "../molecules/our-services-card";
import Wrapper from "../atoms/wrapper";
import Pipeline from "../molecules/pipeline";
import Container from "../atoms/container";
import useGetTranslations from "@/hooks/use-get-translations";

export default function OurServices() {
  const translations = useGetTranslations();
  const card5 = translations.ourServices.service_2.steps;
  return (
    <Container id="our-services" className="w-full md:px-8 lg:px-10">
      <section className="text-yellow-50 max-w-[1280px] mx-auto px-4 py-20 flex flex-col sm:items-center overflow-hidden  lg:py-32 ">
        <p className="font-extralight text-xl text-center mb-2 max-w-[100%] md:max-w-full md:text-2xl">
         {translations.ourServices.preTitle}
        </p>
        <h2 className="text-shadow text-4xl w-full  text-center font-semibold mb-5 md:text-6xl md:mb-16 text-yellow-500 ">
          {translations.ourServices.title}
        </h2>

        <Wrapper className="bg-gray-900 w-full px-4 py-10 mb-10">
          <Service
            serviceTitle={translations.ourServices.services_1.title}
            serviceDescription={translations.ourServices.services_1.description}
          />

          <Wrapper className="flex flex-col gap-10 items-center lg:hidden">
            {translations.ourServices.services_1.steps.map(
              ({ number, description, image, title,alt }, index) => (
                <OurServicesCard
                  number={number}
                  cardTitle={title}
                  cardDescription={description}
                  image={image}
                  key={index + "b"}
                  alt={alt}
                />
              )
            )}
          </Wrapper>

          <Pipeline />
        </Wrapper>

        <Wrapper className="bg-gray-900 w-full px-4 py-10">
          <Service serviceTitle={translations.ourServices.service_2.title} />
          <Wrapper className="flex flex-col gap-10 items-center">
            <OurServicesCard
              number={card5.number}
              cardTitle={card5.title}
              cardDescription={card5.description}
              image={card5.image}
              alt={card5.alt}
            />
          </Wrapper>
        </Wrapper>
      </section>
    </Container>
  );
}
