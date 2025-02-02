import Pill from "../../public/assets/images/pill.png";
import Cuboid from "../../public/assets/images/cuboid.png";
import Cone from "../../public/assets/images/cone.png";
import Icosahedron from "../../public/assets/images/icosahedron.png";
import { twMerge } from "tailwind-merge";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const cardData = [
    {
        image: Pill,
        title: 'Signature Cocktails',
        description: 'Indulge in handcrafted cocktails designed by top mixologists, elevating your night with every sip.',
        color: 'amber'
    },
    {
        image: Cuboid,
        title: 'Live DJ Sessions',
        description: 'Experience the pulse of the night with electrifying DJ sets, spinning the hottest tracks till dawn.',
        color: 'purple'
    },
    {
        image: Cone,
        title: 'VIP Lounge Access',
        description: 'Step into luxury with our exclusive VIP lounge, offering premium drinks and a private atmosphere.',
        color: 'blue'
    },
    {
        image: Icosahedron,
        title: 'Neon Nights & Light Shows',
        description: 'Immerse yourself in a dazzling world of neon lights, immersive visuals, and unforgettable vibes.',
        color: 'fuchsia'
    }
];


export const FeaturesCards = () => {

    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if(isHovered) return;
        const timeout = setTimeout(() => {
            setSelectedCardIndex(curr => curr === cardData.length -1 ? 0 : curr +1);
        }, 3000);
        return () => {
            clearTimeout(timeout);
        }
    }, [selectedCardIndex, isHovered]);

    return (
        <section className="py-24 overflow-x-clip md:-mt-28">
            <div className="container">
                <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center px-2 md:px-0">
                Immerse Yourself in the Night&apos;s Pulse
                </h2>

                <div className="mt-36 lg:mt-48 flex">
                    <div className="flex flex-none gap-8">
                        {cardData.map(({image, title, description, color}) => (
                            <div 
                                className="inline-flex transition-all duration-500" 
                                style={{transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,}}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                key={title}
                            >
                                <Card className="max-w-xs md:max-w-md" key={title} color={color}>
                                    <div className="flex justify-center -mt-28">
                                        <div className="inline-flex relative">
                                            <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                                            <img className="size-40 group-hover:-translate-y-6 transition duration-300" src={image.src} alt="Features Card Image" />
                                        </div>
                                    </div>

                                    <h3 className="font-orbitron font-black text-3xl mt-12">
                                        {title}
                                    </h3>
                                    <p className="text-lg text-zinc-400 mt-4">
                                        {description}
                                    </p>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
                        {cardData.map(({ title }, cardIndex) => (
                            <div 
                                key={title} 
                                className={twMerge("size-2.5 bg-zinc-500 rounded-full cursor-pointer", 
                                cardIndex === selectedCardIndex && 'bg-zinc-300' )}
                                onClick={() => setSelectedCardIndex(cardIndex)}
                            >
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


