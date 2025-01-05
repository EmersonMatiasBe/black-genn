export default function Service({
  serviceTitle,
  serviceDescription
}: ServiceProps) {
  return (
    <div className="mb-10 text-center">
      <h6 className="text-shadow  text-2xl font-bold  mb-3">{serviceTitle}</h6>
      <p className="font-light leading-relaxed max-w-[500px] mx-auto">{serviceDescription}</p>
    </div>
  );
}
