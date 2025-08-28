import './App.css'
import BannerSlider from './components/BannerSlider'
import CardLessons from './components/CardLessons'
import Description from './components/Description'
import ListDescription from './components/ListDescription'
import Navbar from './components/Navbar'



function App() {
  return (
    <>
      <Navbar />
      <div className='flex-col items-center justify-center size-full'>
        <BannerSlider />
         <h1 className='flex font-kavoon text-2xl justify-center'>Surfing Activity at GAPURA</h1>
        <Description />
        <h1 className='flex font-kavoon text-2xl justify-center'>Facility</h1>
        <ListDescription/>
         <h1 className='flex font-kavoon text-2xl justify-center'>Surf Lessons</h1>
         <CardLessons />

      </div>
    </>
  )
}

export default App
