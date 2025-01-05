
export default function OurServicesCard({
  number,
  cardTitle,
  cardDescription,
  image,
  alt,
}: OurServicesCardProps) {
  return (
    <div className=" w-full max-w-[500px] p-4 relative overflow-hidden bg-gradient-to-br from-[#0E0E0E] to-[#1D1D1D] border-[1px] border-gray-400">
      <p
        data-active={number === "0"}
        className="text-primary font-bold text-[148px] leading-none ml-10 md:text-[200px] data-[active=true]:invisible"
      >
        {number}
      </p>
      <h6 className="font-semibold text-xl mb-2">{cardTitle}</h6>
      <p className="text-sm leading-relaxed ">{cardDescription}</p>

      {number === "0" && (
        <img
          src="molecule.webp"
          alt="Imagem de Molécula"
          className="absolute top-[-30px] left-[-80px] w-[230px] h-auto"
        />
      )}

      <img
        src={image}
        alt={alt}
        className="absolute top-[-30px] right-[-80px] w-[230px] h-auto"
      />
    </div>
  );
}
