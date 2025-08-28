import { Select, SelectTrigger, SelectItem, SelectContent, SelectValue } from "@/components/ui/select"


const LanguageSelect = () => {
    return (
        <Select defaultValue="en" name="language">
            <SelectTrigger className="w-[180px] ">
                <SelectValue placeholder="BAHASA" />
            </SelectTrigger>
            <SelectContent position="popper">
                <SelectItem value="id">Indonesia</SelectItem>
                <SelectItem value="en">English</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default LanguageSelect