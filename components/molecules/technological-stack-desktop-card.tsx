import Wrapper from "../atoms/wrapper";

export default function TechnologicalStackDesktopCard({
  image,
  text,
  title,
  alt,
}: TechnologicalStackDesktopCard) {
  return (
    <Wrapper className="w-full flex items-center h-fit">
      <Wrapper className="w-[50%] pr-5">
        <p className="text-primary font-bold mb-2">Technological Stack</p>
        <h4 className="text-4xl font-bold mb-5 ">{title}</h4>
        <p className="text-lg font-light leading-loose">{text}</p>
      </Wrapper>

      <Wrapper className="w-[50%] h-fit">
        <img
          className="bg-black"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
          }}
          src={image}
          alt={alt}
        />
      </Wrapper>
    </Wrapper>
  );
}
