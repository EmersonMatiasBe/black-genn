import { useMyContext } from "@/context/store";
import { useTranslations } from "@/i18n";

export default function useGetTranslations(){
    const { language } = useMyContext();
    const translations = useTranslations(language);

    return translations
}