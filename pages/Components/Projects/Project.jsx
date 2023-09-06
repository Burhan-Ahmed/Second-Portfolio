import Head from 'next/head';
import ArrowButton from './Button';
import WebCard from './WebCard';
import { useState } from 'react';
import { motion } from 'framer-motion'

export default function Project() {
    const [scrollX, setScrollX] = useState(0)

    const moveLeft = () => {
        console.log(scrollX)
        if (scrollX < 0) {
            setScrollX(scrollX + 975)
        }
    };

    const moveRight = () => {

        console.log(scrollX)
        if (scrollX >= -(2 * 975)) {
            setScrollX(scrollX - 975)
        }
    };
    return (
        <>
            <Head>
                <title>Projects by Burhan</title>
            </Head>
            <div className="m-48 text-5xl absolute">
                <h1>My Projects</h1>
            </div>
            <div className="flex h-screen items-center justify-center overflow-hidden">
                <button className="absolute left-5 z-10" onClick={moveLeft}>
                    <ArrowButton rotation={"-rotate-90"} />
                </button>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex ps-10 mx-24 h-1 space-x-5 items-center duration-700 ease-in-out" style={{ transform: `translateX(${scrollX}px)` }}>
                        <WebCard Title={"Star Bucks Website"} link={"Star-Bucks"} picture={"sample1"} />
                        <WebCard Title={"Gaming Website"} link={"League-of-Legends"} picture={"sample3"} />
                        <WebCard Title={"Little Lemon Resurant Website"} link={"Little-Lemon"} picture={"sample2"} />
                        <WebCard Title={"Pokimon App"} link={"Pokimon-App"} picture={"sample4"} />
                    </div>
                </motion.div>
                <button className="absolute right-4 z-10" onClick={moveRight}>
                    <ArrowButton rotation={"rotate-90"} />
                </button>
            </div>
        </>
    )
}
