"use client";
import TechnologicalStackDialog from "./technological-stack-dialog";
import useGetTranslations from "@/hooks/use-get-translations";

export default function TechnologicalStackCard({
  description,
  image,
  title,
  modalDescription,
  alt,
}: TechnologicalStackCardProps) {
  const translations = useGetTranslations();

  return (
    <div className="w-full max-w-[400px] h-fit overflow-hidden relative">
      <img src={image} alt={alt} />
      <div className="absolute bottom-5 left-4">
        <p className="text-primary font-bold mb-2">Technological Stack</p>
        <h4 className="text-2xl font-bold ">{title}</h4>
        <p className="leading-relaxed mb-4">{description}</p>
        <TechnologicalStackDialog
          title={title}
          description={modalDescription}
          label={translations.technologicalStack.learnMore}
        />
      </div>
    </div>
  );
}
