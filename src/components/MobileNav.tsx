import { AnimatePresence, motion } from "motion/react"
import LanguageSelect from "./LanguageSelect"

type Open = {
    open : boolean
}

const MobileNav = ({ open } : Open) => {
    const link = `https://wa.me/+6282274985169/`;
     const handleClick = () => {
        window.open(link, '_blank')
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
                                    <li className="py-4 px-2">HOME</li>
                                    <li className="py-4 px-2">SURF LESSONS</li>
                                    <li className="py-4 px-2">SURF CAMP</li>
                                    <li className="py-4 px-2">GALLERY</li>
                                </ul>
                                <div className='justify-center flex flex-wrap flex-row gap-2'>
                                    <LanguageSelect />
                                    <button className='px-4 py-2 rounded-full bg-blue-600 text-white' onClick={handleClick}>
                                        CONTACT US
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