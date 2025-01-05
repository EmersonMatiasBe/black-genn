import Container from "../atoms/container";
import Wrapper from "../atoms/wrapper";
import TechnologicalStackDesktopCard from "../molecules/technological-stack-desktop-card";
import TechnologicalStackCard from "../molecules/technological-stack-card";
import useGetTranslations from "@/hooks/use-get-translations";


export default function TechnologicalStack2() {
  const translations = useGetTranslations();

  return (
    <Container className="bg-[#010207] px-5 lg:px-10" id="technological-stack">
      <section className="max-w-[1280px] mx-auto py-20 lg:py-32  text-yellow-50">
        <Wrapper className="flex flex-col gap-5 mb-10 items-center lg:flex-row lg:gap-20 lg:mb-28">
          <Wrapper className="w-full  text-center lg:text-left ">
            <p className="font-extralight text-xl mb-2 md:mb-5 max-w-[100%] md:max-w-full md:text-2xl">
              {translations.technologicalStack.preTitle}
            </p>
            <h2 className="text-shadow text-4xl w-full mb-2 font-semibold md:text-6xl md:mb-5 text-yellow-500">
              {translations.technologicalStack.title}
            </h2>
          </Wrapper>
        </Wrapper>

        <Wrapper className="flex flex-col gap-10 max-lg:hidden">
          {translations.technologicalStack.technologies.map(
            ({ imageDesktop, title, modalDescription, alt }, index) => (
              <TechnologicalStackDesktopCard
                title={title}
                image={imageDesktop}
                text={modalDescription}
                key={index}
                alt={alt}
              />
            )
          )}
        </Wrapper>

        <Wrapper className="flex gap-10 flex-wrap justify-center lg:hidden">
          {translations.technologicalStack.technologies.map(
            ({ title, description, image, modalDescription, alt }, index) => (
              <TechnologicalStackCard
                title={title}
                description={description}
                image={image}
                key={index}
                modalDescription={modalDescription}
                alt={alt}
              />
            )
          )}
        </Wrapper>
      </section>
    </Container>
  );
}
