import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "./ui/button";

type Lesson = {
    id: number;
    title: string;
    price: string;
    priceUSD: string;
    image: string;
    description: string;
}

const CardLessons = () => {
    const lessons: Lesson[] = [
        {
            id: 1,
            title: "1 LESSON",
            price: "300,000 Rp",
            priceUSD: "(~20$)",
            image: "https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "FOR BEGINNERS\nFoam (White wash)\nSemi private lesson\n( 1 coach - 2 students)\nDuration max 2 hours\n\nFOR INTERMEDIATE\nLineup (Green waves)\nSemi private\n( 1 coach - 2 students )\nDuration max 2 hours"
        },
        {
            id: 2,
            title: "3 LESSONS",
            price: "850,000 Rp",
            priceUSD: "(~55$)",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "FOR BEGINNERS\nFoam (White wash)\nSemi private lesson\n( 1 coach - 2 students)\nDuration max 2 hours\n\nFOR INTERMEDIATE\nLineup (Green waves)\nSemi private\n( 1 coach - 2 students )\nDuration max 2 hours"
        },
        {
            id: 3,
            title: "5 LESSONS",
            price: "1,300,000 Rp",
            priceUSD: "(~85$)",
            image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "FOR BEGINNERS\nFoam (White wash)\nSemi private lesson\n( 1 coach - 2 students)\nDuration max 2 hours\n\nFOR INTERMEDIATE\nLineup (Green waves)\nSemi private\n( 1 coach - 2 students )\nDuration max 2 hours"
        },
        {
            id: 4,
            title: "5 LESSONS",
            price: "1,300,000 Rp",
            priceUSD: "(~85$)",
            image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "FOR BEGINNERS\nFoam (White wash)\nSemi private lesson\n( 1 coach - 2 students)\nDuration max 2 hours\n\nFOR INTERMEDIATE\nLineup (Green waves)\nSemi private\n( 1 coach - 2 students )\nDuration max 2 hours"
        },
        {
            id: 5,
            title: "5 LESSONS",
            price: "1,300,000 Rp",
            priceUSD: "(~85$)",
            image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "FOR BEGINNERS\nFoam (White wash)\nSemi private lesson\n( 1 coach - 2 students)\nDuration max 2 hours\n\nFOR INTERMEDIATE\nLineup (Green waves)\nSemi private\n( 1 coach - 2 students )\nDuration max 2 hours"
        }
    ];

    return (
        <div className="mt-5 px-4">
            <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4">
                {lessons.map((lesson) => (
                    <Card key={lesson.id} className="min-w-[300px] flex-shrink-0">
                        <CardHeader>
                            <CardTitle>{lesson.title}</CardTitle>
                            <img src={lesson.image} alt={lesson.title} className="w-full h-48 object-cover rounded-md" />
                        </CardHeader>
                        <CardContent>
                            <p className="font-bold text-lg">{lesson.price}</p>
                            <p className="text-gray-600">{lesson.priceUSD}</p>
                            <CardDescription>
                                <p className="whitespace-pre-line text-sm">{lesson.description}</p>
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="justify-center">
                            <Button>Book Now</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default CardLessons;