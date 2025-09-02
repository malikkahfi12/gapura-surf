import { useState } from "react"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

type Slide = {
    src: string,
    title: string,
    description: string
}

const data_slides: Slide[] = [
    {
        src: "https://plus.unsplash.com/premium_photo-1672510003630-18d2535419ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title slide 1",
        description: "Description slide 1"
    },
    {
        src: "https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title slide 2",
        description: "Description slide 2"
    },
    {
        src: "https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title slide 3",
        description: "Description slide 3"
    },
    {
        src: "https://images.unsplash.com/photo-1476673661721-ee798b115c3f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title slide 4",
        description: "Description slide 4"
    },
    {
        src: "https://images.unsplash.com/photo-1476673661721-ee798b115c3f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title slide 4",
        description: "Description slide 4"
    },
    {
        src: "https://images.unsplash.com/photo-1476673661721-ee798b115c3f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Title slide 4",
        description: "Description slide 4"
    },

]

const AlbumPhotos = () => {
    const [index, setIndex] = useState<number>(-1)
   
    return (
        <>
            <ScrollArea className="w-full rounded-md border whitespace-nowrap">
                <div className="flex w-max space-x-4 p-4">
                    {
                        data_slides.map((dataslide, index) => (
                            <div key={index} className="w-full h-full object-cover rounded-lg" onClick={() => {setIndex(index)}}>
                                <img className="size-50 sm:size-80 rounded-2xl" src={dataslide.src} alt={dataslide.description} />
                            </div>
                        ))
                    }
                </div>
                {/* <Images data={data_slides} onClick={(currentIndex) => { setIndex(currentIndex) }} /> */}
                <Lightbox className="cursor-pointer" open={index >= 0} index={index} close={() => setIndex(-1)} slides={data_slides} />
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </>

    )
}

export default AlbumPhotos