import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../css/swiper.css"
import { Button } from "./ui/button"

type Banner = {
    id: number
    image: string
    title: string,
    description : string
}

const banners: Banner[] = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "SURF SCHOOL IN KUTA BALI",
        description: "Book your surfing activity"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1602425421946-4c8180938231?q=80&w=3145&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Ride the Waves 🌊",
        description: "Looking for adventure, confidence, and an unforgettable time in the ocean?"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Learn to Surf Today! 🏄‍♂️ ",
        description: "Our expert-led Surfing Lessons are perfect for beginners and intermediate surfers alike."
    },
]

export default function BannerSlider() {
    return (
        <div className="w-full pt-8 sm:pl-10 sm:pr-10 pl-4 pr-4 mb-4">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="rounded-2xl shadow-lg"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <div className="relative w-full h-[300px]">
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center flex-col">
                                <h2 className="text-white text-2xl font-bold">
                                    {banner.title}
                                </h2>
                                <h3 className="text-white text-center p-3">
                                    {banner.description}
                                </h3>
                                <Button className="justify-end mt-2">Book Now</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}