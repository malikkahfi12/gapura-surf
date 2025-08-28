import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import LanguageSelect from "./LanguageSelect";
import logo from "../assets/logo.png"

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='container mx-auto py-6 px-3'>
            <nav className="fixed top-0 left-0 w-full bg-white z-50 flex justify-between items-center py-4 px-6">
                <div>
                    <img src={logo} alt="Logo" className="size-10 sm:size-15" />
                </div>
                <ul className='font-bold gap-8 hidden lg:flex'>
                    <li className="hover:cursor-pointer">HOME</li>
                    <li className="hover:cursor-pointer">SURF LESSONS</li>
                    <li className="hover:cursor-pointer">ABOUT US</li>
                    <li className="hover:cursor-pointer">GALLERY</li>
                </ul>
                <div className='lg:flex hidden gap-2'>
                    <LanguageSelect />
                    <Button className='px-4 py-2 rounded-full text-white'>
                        CONTACT US
                    </Button>
                </div>
                <div className='lg:hidden block'>
                    <button onClick={() => setOpen(!open)}>
                        <BiDotsVerticalRounded className='size-8' />
                    </button>
                </div>
              
            </nav>
              <MobileNav open={open} />
        </div>
    )
}

export default Navbar;