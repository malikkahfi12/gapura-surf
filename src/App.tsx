import './App.css'
import AlbumPhotos from './components/AlbumPhotos'
import BannerSlider from './components/BannerSlider'
import CardLessons from './components/CardLessons'
import Description from './components/Description'
import Footer from './components/Footer'
import FooterInformation from './components/FooterInformation'
import ListDescription from './components/ListDescription'
import Navbar from './components/Navbar'
import { LanguageProvider } from './contexts/LanguageContext'
import { FloatingWhatsApp } from 'react-floating-whatsapp'


function App() {
  return (
    <LanguageProvider>
      <FloatingWhatsApp  
      phoneNumber='+6282274985169'
      accountName='GapuraSurf'
      chatMessage='Hi There how can we assist you today?'
      placeholder='Type your message here ...'
      />
      <Navbar />
      <div id='#' className='flex-col items-center justify-center size-full'>
        <BannerSlider />
         <h1 id='description' className='flex font-kavoon text-2xl justify-center whitespace-pre'>Surfing Activity at <span className='text-secondary'>GAPURA</span></h1>
        <Description />
        <h1 className='flex font-kavoon text-2xl justify-center text-secondary'>Facility</h1>
        <ListDescription/>
         <h1 id="surf-lessons" className='flex font-kavoon text-2xl justify-center text-secondary'>Surf Lessons</h1>
         <CardLessons />
          <h1 id="gallery" className='flex font-kavoon text-2xl justify-center mt-5 text-secondary'>Gallery</h1>
          <AlbumPhotos />
          <FooterInformation />
          <Footer/>

      </div>
    </LanguageProvider>
  )
}

export default App
