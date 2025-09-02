import { AnimatePresence, motion } from "motion/react"
import LanguageSelect from "./LanguageSelect"
import { useLanguage } from "@/contexts/LanguageContext"

type Open = {
    open : boolean
    setOpen: (open: boolean) => void
}

const MobileNav = ({ open, setOpen } : Open) => {
    const { t } = useLanguage();
    const link = `https://wa.me/+6282274985169/`;
     const handleClick = () => {
        window.open(link, '_blank')
        setOpen(false)
    }
    
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setOpen(false);
    }
    return (
        <>
            <AnimatePresence>
                {
                    open && (
                        <motion.div initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed left-0 w-full h-screen z-20 lg:hidden mt-8">
                            <div className="bg-white py-3 rounded-b-xl">
                                <ul className='text-xs font-bold gap-5 py-2 px-4'>
                                    <li className="py-4 px-2 hover:cursor-pointer" onClick={() => scrollToSection('#')}>{t.nav.home}</li>
                                    <li className="py-4 px-2 hover:cursor-pointer" onClick={() => scrollToSection('surf-lessons')}>{t.nav.surf_lessons}</li>
                                    <li className="py-4 px-2 hover:cursor-pointer" onClick={() => scrollToSection('description')}>{t.nav.surf_camp}</li>
                                    <li className="py-4 px-2 hover:cursor-pointer" onClick={() => scrollToSection('gallery')}>{t.nav.gallery}</li>
                                </ul>
                                <div className='justify-center flex flex-wrap flex-row gap-2'>
                                    <LanguageSelect />
                                    <button className='px-4 py-2 rounded-full bg-blue-600 text-white' onClick={handleClick}>
                                        {t.nav.contact_us}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>

        </>
    )
}

export default MobileNav