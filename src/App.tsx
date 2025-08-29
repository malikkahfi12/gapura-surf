import './App.css'
import AlbumPhotos from './components/AlbumPhotos'
import BannerSlider from './components/BannerSlider'
import CardLessons from './components/CardLessons'
import Description from './components/Description'
import Footer from './components/Footer'
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
        <h1 className='flex font-kavoon text-2xl justify-center'>Facility</h1>
        <ListDescription/>
         <h1 className='flex font-kavoon text-2xl justify-center'>Surf Lessons</h1>
         <CardLessons />
          <h1 className='flex font-kavoon text-2xl justify-center mt-5'>Albums</h1>
          <AlbumPhotos />
          <Footer/>

      </div>
    </>
  )
}

export default App
