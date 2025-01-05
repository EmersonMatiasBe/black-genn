import SettingsIcon from "@/assets/icons/settings-icon";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import useGetTranslations from "@/hooks/use-get-translations";

export default function SideMenu() {
  const translations = useGetTranslations();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="'bg-red-500 text-white 1000:hidden ">
          <SettingsIcon className="h-8 w-auto text-white fill-white" />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-neutral-950 border-none w-full" side={'right'}>
        <SheetHeader className="hidden text-white fill-white">
          <SheetTitle />
          <SheetDescription />
        </SheetHeader>

        <div className="w-full flex flex-col gap-5 mt-5">
          {translations.sideMenu.sections.map((section, index) => (
            <SheetClose asChild key={index}>
              <Link
                className="text-neutral-50 bg-gray-800 hover:bg-gray-600 py-3 pl-5 text-lg font-semibold w-full text-left"
                href={`#${section.id}`}
              >
                {section.label}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
      <SheetFooter>
        <SheetClose className="bg-red-500" />
      </SheetFooter>
    </Sheet>
  );
}
