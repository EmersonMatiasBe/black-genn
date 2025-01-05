import { englishMessages } from "./en"
import { portugueseMessages } from "./pt"

type Languagues = 'pt' | 'en'

export const messages: Record<Languagues, typeof portugueseMessages> = {
    en: englishMessages,
    pt: portugueseMessages,
}

export function useTranslations(lang: Languagues){
    return messages[lang]
}