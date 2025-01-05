import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function TechnologicalStackDialog({
  description,
  title,
  label
}: TechnologicalStackDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className="bg-yellow-600 px-4 py-2 rounded-md font-semibold text-black">
        {label}
      </DialogTrigger>
      <DialogContent className="border-none flex flex-col w-[90%] max-w-[500px] max-h-[80dvh] h-fit overflow-hidden text-yellow-50 bg-gray-800 px-5 py-10 rounded-lg">
        <DialogTitle>
          <span className="text-primary font-bold mb-2 block">
            Technological Stack
          </span>
          <span className="text-2xl font-bold">{title}</span>
        </DialogTitle>

        <DialogDescription className="overflow-y-auto leading-relaxed text-base">
          {description}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
