import logo from '../assets/logo.png'

const FooterInformation = () => {
    return (
        <div className="bg-secondary flex flex-wrap">
            <div className='w-full pt-8 sm:pl-10 sm:pr-10 pl-4 pr-4 mb-4 flex flex-col sm:flex-row items-center gap-3'>
                <div className='flex-1'>
                    <img src={logo} alt="Logo" className='size-30 justify-center items-center'/>
                    <p className='text-white'>GAPURA is a provider of surfing lessons for all levels accompanied by experienced and highly qualified instructors.</p>
                </div>
                 <div className='flex-1'>
                    <p className='text-white font-bold'>CONTACT</p>
                    <p className='text-white'>0819-12345-722</p>
                    <p className='text-white'>gapura@gmail.com</p>
                    <p className='text-white'>Kuta beach, Front of mamaka hotel, Kec. Kuta, Bali 80361</p>
                </div>
            </div>
        </div>
    )
}

export default FooterInformation