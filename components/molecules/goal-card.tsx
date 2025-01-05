/* eslint-disable @next/next/no-img-element */

export default function GoalCard({ title, description, image }: GoalCardProps) {
  return (
    <div className="flex flex-col items-left w-full">
      <div className="flex items-center gap-4 mb-2">
        <img
          src={image}
          alt="Goals"
          className="w-10 h-10 inline"
        />
        <h6 className="font-medium text-primary xl:text-xl"> {title}</h6>
      </div>

      <p className="text-left font-light xl:text-lg">{description}</p>
    </div>
  );
}
