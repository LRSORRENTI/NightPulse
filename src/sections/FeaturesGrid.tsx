import { useRef } from "react"
import { CutCornerButton } from "../components/CutCornerButton"
import LearnMoreButton from "../components/LearnMoreButton"
import { motion, useScroll, useTransform } from "framer-motion"

const listItems = [
    "Experience unparalleled security and scalability",
    "Fully benifit from scalable network effects",
    "Unlock the potential of decentralized networks",
];


export const FeaturesGrid = () => {

    const torusRef = useRef(null);
    const firstHemisphereRef = useRef(null);
    const coneRef = useRef(null);
    const secondHemisphereRef = useRef(null);

    // Torus
    const {scrollYProgress: torusKnotScrollYProgress} = useScroll({
        target: torusRef, 
        offset: ['start end', 'end start'],
    });
    const torusKnotTranslateY = useTransform(torusKnotScrollYProgress, [0, 1], [100, -100]); // the speed
    const torusKnotRotate = useTransform(torusKnotScrollYProgress, [0, 1], [30, -30]); // the rotation direction

    // FirstHemisphere
    const {scrollYProgress: firstHemisphereScrollYProgress} = useScroll({
        target: firstHemisphereRef, 
        offset: ['start end', 'end start'],
    });
    const firstHemisphereTranslateY = useTransform(firstHemisphereScrollYProgress, [0, 1], [50, -50]); // the speed
    const firstHemisphereRotate = useTransform(firstHemisphereScrollYProgress, [0, 1], [-20, -50]); // the rotation direction

    // Cone
    const {scrollYProgress: coneScrollYProgress} = useScroll({
        target: coneRef, 
        offset: ['start end', 'end start'],
    });
    const coneTranslateY = useTransform(coneScrollYProgress, [0, 1], [-100, 100]); // the speed
    const coneRotate = useTransform(coneScrollYProgress, [0, 1], [12, 45]); // the rotation direction

    // SecondHemisphere
    const {scrollYProgress: secondHemisphereScrollYProgress} = useScroll({
        target: secondHemisphereRef, 
        offset: ['start end', 'end start'],
    });
    const secondHemisphereTranslateY = useTransform(secondHemisphereScrollYProgress, [0, 1], [50, -50]); // the speed
    const secondHemisphereRotate = useTransform(secondHemisphereScrollYProgress, [0, 1], [-20, 10]); // the rotation direction


    return (
        <section className="py-24 overflow-x-clip px-2 md:px-0">
            <div className="container">
                <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
                    {/* LEFT SIDE CONTENT */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-2 px-2 md:px-0">
                            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                                Empowering the future of BlockChain
                            </h2>
                            <p className="text-xl lg:text-2xl text-zinc-400 mt-8">
                                BlockSmith provides robust and secure infrastructur to support the next generation of decentralized applications
                            </p>
                            <ul className="flex flex-col gap-8 mt-12">
                                {listItems.map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full ">
                                            <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                                        </div>
                                        <span className="text-xl font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex gap-8 mt-12 items-center justify-center lg:justify-start lg:pr-2">
                                <CutCornerButton>Get Started</CutCornerButton>
                                <LearnMoreButton>Learn More</LearnMoreButton>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="relative inline-flex z-0">
                                <motion.img 
                                    className="size-96 max-w-none" 
                                    src="/assets/images/torus-knot.png" 
                                    alt="Torus Knot image" 
                                    ref={torusRef} 
                                    style={{
                                        translateY: torusKnotTranslateY,
                                        rotate: torusKnotRotate,
                                    }}
                                />
                                <motion.img 
                                    className="absolute size-96 top-3/4 -z-10 scale-x-[-1]" 
                                    src="/assets/images/hemisphere.png" 
                                    alt="Hemisphere image" 
                                    ref={firstHemisphereRef} 
                                    style={{
                                        translateY: firstHemisphereTranslateY,
                                        rotate: firstHemisphereRotate,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {/* RIGHT SIDE CONTENT */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="relative hidden md:block">
                            <div className="absolute right-0 z-0">
                                <motion.img 
                                    className="size-96 max-w-none rotate-12" 
                                    src="/assets/images/cone.png" 
                                    alt="Cone image" 
                                    ref={coneRef} 
                                    style={{
                                        translateY: coneTranslateY,
                                        rotate: coneRotate,
                                    }}
                                />
                                <motion.img 
                                    className="absolute top-3/4 left-0 -z-10" 
                                    src="/assets/images/hemisphere.png" 
                                    alt="Hemisphere image" 
                                    ref={secondHemisphereRef} 
                                    style={{
                                        translateY: secondHemisphereTranslateY,
                                        rotate: secondHemisphereRotate,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-span-2 px-2 md:px-0">
                            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                                BlockSmith leads the way
                            </h2>
                            <div className="flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 gap-6">
                                <p>
                                    BlockSmith is dedicated to support the evolution of Web3 applications by delivering the necessary infrastructure and secuirty for Web3
                                </p>
                                <p>
                                    BlockSmith champions Web3 for everyone. As a decentralized BlockChain scaling platform, BlockSmith enables developers to create scable user-friendly Apps with transaction cost ensuring robust security.
                                </p>
                            </div>
                            <div className="flex gap-8 mt-12 items-center justify-center lg:justify-start lg:pr-2">
                                <CutCornerButton>Get Started</CutCornerButton>
                                <LearnMoreButton>Learn More</LearnMoreButton>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

