import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import LanguageSelect from "./LanguageSelect";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "../assets/logo.png"



const Navbar = () => {
    const { t } = useLanguage();
    const link = `https://wa.me/+6282274985169/`;
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        window.open(link, '_blank')
    }
    
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    return (
        <div className='container mx-auto py-6 px-3'>
            <nav className="fixed top-0 left-0 w-full bg-white z-50 flex justify-between items-center py-4 px-6">
                <div>
                    <img src={logo} alt="Logo" className="size-10 sm:size-15" />
                </div>
                <ul className='font-bold gap-8 hidden lg:flex'>
                    <li className="hover:cursor-pointer" onClick={() => scrollToSection('#')}>{t.nav.home}</li>
                    <li className="hover:cursor-pointer" onClick={() => scrollToSection('surf-lessons')}>{t.nav.surf_lessons}</li>
                    <li className="hover:cursor-pointer" onClick={() => scrollToSection('description')}>{t.nav.about_us}</li>
                    <li className="hover:cursor-pointer" onClick={() => scrollToSection('gallery')}>{t.nav.gallery}</li>
                </ul>
                <div className='lg:flex hidden gap-2'>
                    <LanguageSelect />
                    <Button className='px-4 py-2 rounded-full text-white' onClick={handleClick}>
                        {t.nav.contact_us}
                    </Button>
                </div>
                <div className='lg:hidden block'>
                    <button onClick={() => setOpen(!open)}>
                        <BiDotsVerticalRounded className='size-8' />
                    </button>
                </div>

            </nav>
            <MobileNav open={open} setOpen={setOpen} />
        </div>
    )
}

export default Navbar;