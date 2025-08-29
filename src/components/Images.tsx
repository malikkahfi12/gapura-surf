import type { FC } from "react";

interface ImageProps {
    data: {
        src: string,
        title: string,
        description: string
    }[];
    onClick: (index: number) => void;
}

const Images: FC<ImageProps> = (props) => {
    const { data, onClick } = props;

    const handleClickImage = (index: number) => {
        onClick(index)
    }

    return (
        <div className="max-w-[1200px] mx-auto my-8 grid [grid-template-columns:repeat(auto-fit,minmax(15rem,1fr))] gap-4" >
            {data.map((slide, index) => (
                <div key={index} className="w-full h-full object-cover rounded-lg" onClick={() => handleClickImage(index)}>
                    <img src={slide.src} alt={slide.description} />
                </div>
            ))}
        </div>
    )
}

export default Images;