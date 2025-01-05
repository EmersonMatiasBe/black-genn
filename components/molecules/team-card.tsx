import Wrapper from "../atoms/wrapper";
import LinkedinIcon from "@/assets/icons/linkedin-icon";

export default function TeamCard2({
  image,
  name,
  position,
  urlLinkedin,
  alt
}: TeamCard) {
  function openLink(link: string) {
    window.open(link, "_blank");
  }

  return (
    <Wrapper className="w-full max-w-[360px] text-center">
      <Wrapper className="relative">
        <img
          className="w-[100%] h-auto mx-auto mb-5 bg-white px-4 py-6"
          src={image}
          alt={alt}
        />
        <Wrapper className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <button
            className="bg-yellow-50 p-4 rounded-full"
            onClick={() => openLink(urlLinkedin)}
          >
            <LinkedinIcon className="w-10 fill-neutral-900" />
          </button>
        </Wrapper>
      </Wrapper>

      <Wrapper>
        <h6 className="text-2xl mb-2">{name}</h6>
        <p className="text-lg">{position}</p>
      </Wrapper>
    </Wrapper>
  );
}
