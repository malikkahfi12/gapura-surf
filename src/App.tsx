import './App.css'
import AlbumPhotos from './components/AlbumPhotos'
import BannerSlider from './components/BannerSlider'
import CardLessons from './components/CardLessons'
import Description from './components/Description'
import Footer from './components/Footer'
import FooterInformation from './components/FooterInformation'
import ListDescription from './components/ListDescription'
import Navbar from './components/Navbar'



function App() {
  return (
    <>
      <Navbar />
      <div className='flex-col items-center justify-center size-full'>
        <BannerSlider />
         <h1 className='flex font-kavoon text-2xl justify-center whitespace-pre'>Surfing Activity at <span className='text-secondary'>GAPURA</span></h1>
        <Description />
        <h1 className='flex font-kavoon text-2xl justify-center text-secondary'>Facility</h1>
        <ListDescription/>
         <h1 className='flex font-kavoon text-2xl justify-center text-secondary'>Surf Lessons</h1>
         <CardLessons />
          <h1 className='flex font-kavoon text-2xl justify-center mt-5 text-secondary'>Gallery</h1>
          <AlbumPhotos />
          <FooterInformation />
          <Footer/>

      </div>
    </>
  )
}

export default App
