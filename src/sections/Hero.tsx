import { CutCornerButton } from "../components/CutCornerButton"
// import IconHero from "../../public/assets/images/icosahedron.png";

import PurplePinkGlass from '../drinkAssets/PurplePinkGlass.png'
import ColorfulDrink from '../drinkAssets/ColorfulDrink.png'
import PurpleMartini from '../drinkAssets/DarkPurpleMartini.png'
// import ShinyMartini from '../../public/assets/drinkAssets/ShinyMartiniAndGlass.png'
import PinkSplash from '../drinkAssets/PinkSplashGlass.png'

import { Hexagon } from "../components/Hexagon";
// import Cube from "../../public/assets/images/cube.png";
// import Cuboid from "../../public/assets/images/cuboid.png";
import { Circle } from "../components/Circle";
// import Torus from "../../public/assets/images/torus.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const HeroSection = () => {

    //useRef for tracking the DOM when we scrolling
    const icosahedronRef = useRef(null);
    const cubeRef = useRef(null);
    const torusRef = useRef(null);
    const cuboidRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: icosahedronRef,
        offset: ['start end', 'end start']
    });
    const { scrollYProgress: cubeScrollYProgress } = useScroll({
        target: cubeRef,
        offset: ['start end', 'end start']
    });
    const { scrollYProgress: torusScrollYProgress } = useScroll({
        target: torusRef,
        offset: ['start end', 'end start']
    });
    const { scrollYProgress: cuboidScrollYProgress } = useScroll({
        target: cuboidRef,
        offset: ['start end', 'end start']
    });

    const icosahedronRotate = useTransform(scrollYProgress, [0, 1], [30, -45]);
    const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [100, -45]);
    const torusRotate = useTransform(torusScrollYProgress, [0, 1], [20, -20]);
    const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [60, -20]);

    return (
        <section className="py-24 md:py-52 overflow-x-clip">
            <div className="container">
            <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
                Welcome to NightPulse
                </p>
                <h1 className="font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4 max-w-3xl mx-auto font-orbitron">
                    The Rhythm of the Night
                </h1>
                <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto"> 
                    Experience electrifying vibes, signature cocktails, and unforgettable events every night.
                </p>

                <div className="flex justify-center mt-10">
                    <CutCornerButton className="">Explore Events</CutCornerButton>
                </div>

                <div className="flex justify-center mt-24">
                    <div className="inline-flex relative z-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Hexagon className="size-[1100px]" size={1100} />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Hexagon className="size-[1800px]" size={1800} reverse duration={60} />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Circle className="absolute left-[200px] -top-[900px]" animate>
                                <motion.img className="size-[140px]" src={PinkSplash.src} alt="Cube 3D image" ref={cubeRef} style={{rotate: cubeRotate}} />
                            </Circle>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Circle className="absolute left-[200px] top-[270px]" animate>
                                <motion.img className="size-[140px]" src={ColorfulDrink.src} alt="Cuboid 3D image" ref={cuboidRef} style={{rotate: cuboidRotate}} />
                            </Circle>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Circle className="absolute -left-[600px] -top-[80px]">
                                <motion.img className="size-[240px]" src={PurpleMartini.src} alt="Torus 3D image" ref={torusRef} style={{rotate: torusRotate}} />
                            </Circle>
                        </div>
                        <motion.div className="inline-flex" ref={icosahedronRef} style={{rotate: icosahedronRotate}}>
                            <img 
                                src={PurplePinkGlass.src} 
                                alt="Hero Shadow" 
                                className="absolute w-[calc(100%+40px)] max-w-none -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]" 
                            />
                            <img src={PurplePinkGlass.src} alt="Icon Hero" className="w-[500px]" />
                        </motion.div>
                    </div>
                </div>

                <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
                    <div className="justify-center pt-2 h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex rounded-full">
                        <motion.div 
                            className="h-3 w-1 bg-fuchsia-500 rounded-full"
                            animate={{
                                translateY: 12,
                                opacity: .2,
                            }}
                            transition={{
                                duration: 2,
                                ease: 'linear',
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                        />
                    </div>
                    <p className="uppercase text-zinc-500 font-extrabold tracking-wider">Scroll to learn more</p>
                </div>
            </div>
        </section>
    )
}


