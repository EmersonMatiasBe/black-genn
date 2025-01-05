import Container from "../atoms/container";
import Wrapper from "../atoms/wrapper";
import GoalCard from "../molecules/goal-card";
import { openWhatsapp } from "@/helpers/openWhatsapp";
import useGetTranslations from "@/hooks/use-get-translations";

export default function Goals() {
  const translations = useGetTranslations();

  return (
    <Container
      className="bg-[#010207] mt-[200px] px-5 lg:py-32 lg:px-10"
      id="goals"
    >
      <section className="max-w-[1280px] bg-gray-900 mx-auto py-20  text-yellow-50 px-5 lg:flex lg:px-20 lg:gap-10">
        <Wrapper className="w-full h-max-[500px] flex mb-10 lg:mb-0 justify-center lg:w-[50%]  mt-[-280px] overflow-hidden">
          <img
            className="max-lg:hidden"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              objectPosition: "center",
            }}
            src='bg-goal.webp'
            alt="Scientist"

          />
          <img
            className="lg:hidden"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              objectPosition: "center",
              maxWidth: "500px",
            }}
            src='bg-goal-mobile.webp'
            alt="Scientist"
     
          />
        </Wrapper>

        <Wrapper className="lg:w-[50%] flex flex-col justify-end">
          <p className="font-extralight text-xl text-center mb-2 max-w-[100%] md:max-w-full md:text-2xl lg:text-left">
            {translations.goals.preTitle}
          </p>
          <h2 className="text-shadow text-4xl w-full text-center font-semibold mb-5 md:text-5xl md:mb-5 text-yellow-500 lg:text-left">
            {translations.goals.title}
          </h2>
          <p className="font-extralight text-sm text-center max-w-[100%] md:max-w-full lg:text-base lg:text-left">
            {translations.goals.description}
          </p>

          <Wrapper className="flex flex-col items-center gap-10 mt-10 lg:flex-col xl:mb-10 z-10">
            {translations.goals.goalsList.map(
              ({ image, title, description }, index) => (
                <GoalCard
                  image={image}
                  title={title}
                  description={description}
                  key={index}
                />
              )
            )}
          </Wrapper>

          <button
            className="w-full rounded-full bg-yellow-500 hover:bg-yellow-700 py-4 px-8 mt-5"
            onClick={openWhatsapp}
          >
            {translations.goals.buttonLabel}
          </button>
        </Wrapper>
      </section>
    </Container>
  );
}
