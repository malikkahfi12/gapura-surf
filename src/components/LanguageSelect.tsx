import { Select, SelectTrigger, SelectItem, SelectContent, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/LanguageContext"

const LanguageSelect = () => {
    const { language, setLanguage, t } = useLanguage();

    return (
        <Select value={language} onValueChange={(value) => setLanguage(value as 'en' | 'id')} name="language">
            <SelectTrigger className="w-[180px] ">
                <SelectValue placeholder={t.nav.language} />
            </SelectTrigger>
            <SelectContent position="popper">
                <SelectItem value="id">{t.language_options.indonesian}</SelectItem>
                <SelectItem value="en">{t.language_options.english}</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default LanguageSelect