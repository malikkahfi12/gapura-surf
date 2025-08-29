import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card"

type Content = {
    title: string,
    description: string
}

const contents: Content[] = [
    {
        title: "Protective Surfer Clothing",
        description: " For guys, rush guard with long sleeves and shorts are issued. For girls, leggings and rush guard with long sleeves. Children are also provided with an additional safety surf helmet."
    },
    {
        title: "Photo/Video Analysis After the Lesson",
        description: "After each lesson, we analyze the lesson based on photo/video materials filmed during the lesson."
    },
    {
        title: "Lockers for Storing Personal Belongings",
        description: "You can save your items in Lockers for during surfing."
    }
]

const CardFacility = () => {
    return (
        <div className="flex flex-row flex-wrap gap-5 justify-center">
            {contents.map((content) => (
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>{content.title}</CardTitle>
                        <CardDescription>
                            {content.description}
                        </CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>

    )
}

export default CardFacility;