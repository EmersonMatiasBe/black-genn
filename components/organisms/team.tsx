import Container from "../atoms/container";
import Wrapper from "../atoms/wrapper";
import TeamCard2 from "../molecules/team-card";
import useGetTranslations from "@/hooks/use-get-translations";

export default function Team() {
  const translations = useGetTranslations();

  return (
    <Container className="bg-[#010207] px-5 lg:px-10" id="team">
      <section className="max-w-[1280px] mx-auto py-20 text-yellow-50">
        <Wrapper className="flex items-center flex-col text-center mb-10">
          <h2 className="text-shadow text-4xl w-full mb-2 font-semibold md:text-6xl md:mb-5 text-yellow-500 ">
            {translations.team.title}
          </h2>
        </Wrapper>

        <Wrapper className="w-full flex flex-wrap gap-10 justify-center">
          {translations.team.employees.map(
            ({ image, name, position, urlLinkedin, alt }) => (
              <TeamCard2
                image={image}
                name={name}
                position={position}
                urlLinkedin={urlLinkedin}
                key={name}
                alt={alt}
              />
            )
          )}
        </Wrapper>
      </section>
    </Container>
  );
}
