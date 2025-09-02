import logo from '../assets/logo.png'

const FooterInformation = () => {
    return (
        <div className="bg-secondary flex flex-wrap">
            <div className="w-full pt-8 sm:pl-10 sm:pr-10 pl-4 pr-4 mb-4 flex flex-col sm:flex-row items-center gap-3">
                {/* LOGO + DESCRIPTION */}
                <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                    {/* Center image */}
                    <img src={logo} alt="Logo" className="w-24 h-24 mb-3" />
                    <p className="text-white">
                        GAPURA is a provider of surfing lessons for all levels accompanied by experienced and highly qualified instructors.
                    </p>
                </div>

                {/* CONTACT INFO */}
                <div className="flex-1 text-center sm:text-left">
                    <p className="text-white font-bold">CONTACT</p>
                    <p className="text-white">+62 822-7498-5169 (Yakob)</p>
                    <p className="text-white">gapura@gmail.com</p>
                    <p className="text-white">Kuta beach</p>
                </div>
            </div>
        </div>

    )
}

export default FooterInformation