import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "./ui/button";

const CardLessons = () => {
    return (
        <div className="flex flex-row flex-wrap gap-5 justify-center mt-5">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>1 LESSON</CardTitle>
                    <img src="https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </CardHeader>
                <CardContent>
                    <p>300,000 Rp</p>
                    <p>(~20$)</p>
                    <CardDescription>
                        <p>FOR BEGINNERS
                            Foam (White wash)
                            Semi private lesson
                            ( 1 coach - 2 students)
                            Duration max 2 hours

                            FOR INTERMEDIATE
                            Lineup (Green waves)
                            Semi private
                            ( 1 coach - 2 students )
                            Duration max 2 hours</p>
                    </CardDescription>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button>Book Now</Button>
                </CardFooter>
            </Card>

            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>1 LESSON</CardTitle>
                    <img src="https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </CardHeader>
                <CardContent>
                    <p>300,000 Rp</p>
                    <p>(~20$)</p>
                    <CardDescription>
                        <p>FOR BEGINNERS
                            Foam (White wash)
                            Semi private lesson
                            ( 1 coach - 2 students)
                            Duration max 2 hours

                            FOR INTERMEDIATE
                            Lineup (Green waves)
                            Semi private
                            ( 1 coach - 2 students )
                            Duration max 2 hours</p>
                    </CardDescription>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button>Book Now</Button>
                </CardFooter>
            </Card>

            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>1 LESSON</CardTitle>
                    <img src="https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </CardHeader>
                <CardContent>
                    <p>300,000 Rp</p>
                    <p>(~20$)</p>
                    <CardDescription>
                        <p>FOR BEGINNERS
                            Foam (White wash)
                            Semi private lesson
                            ( 1 coach - 2 students)
                            Duration max 2 hours

                            FOR INTERMEDIATE
                            Lineup (Green waves)
                            Semi private
                            ( 1 coach - 2 students )
                            Duration max 2 hours</p>
                    </CardDescription>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button>Book Now</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default CardLessons;