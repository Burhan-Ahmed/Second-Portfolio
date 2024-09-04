import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRef, useState } from 'react';
import ArrowButton from './Button';
import WebCard from './WebCard';

export default function Project() {
    const [scrollX, setScrollX] = useState(0);
    const containerRef = useRef(null);

    const getMaxScrollX = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.scrollWidth;
            const viewportWidth = containerRef.current.clientWidth;
            return viewportWidth - containerWidth;
        }
        return 0;
    };

    const moveLeft = () => {
        setScrollX(prevScrollX => Math.min(prevScrollX + 500, 0));
    };

    const moveRight = () => {
        setScrollX(prevScrollX => Math.max(prevScrollX - 500, getMaxScrollX()));
    };

    return (
        <>
            <Head>
                <title>Projects by Burhan</title>
            </Head>
            <div className="mx-48 my-40 text-5xl absolute">
                <h1>My Projects</h1>
            </div>
            <div className="relative flex h-screen items-center justify-center overflow-hidden">
                <button className="absolute left-5 z-10" onClick={moveLeft}>
                    <ArrowButton rotation={"-rotate-90"} />
                </button>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div
                        className="flex p-44 mx-44 mt-14 space-x-20 items-center duration-700 ease-in-out"
                        style={{ transform: `translateX(${scrollX}px)` }}
                        ref={containerRef}
                    >
                        <WebCard Title={"Star Bucks Website"} link={"Star-Bucks"} picture={"sample1"} />
                        <WebCard Title={"Gaming Website"} link={"League-of-Legends"} picture={"sample3"} />
                        <WebCard Title={"Little Lemon Restaurant Website"} link={"Little-Lemon"} picture={"sample2"} />
                        <WebCard Title={"Pokimon App"} link={"Pokimon-App"} picture={"sample4"} />
                    </div>
                </motion.div>
                <button className="absolute right-4 z-10" onClick={moveRight}>
                    <ArrowButton rotation={"rotate-90"} />
                </button>
            </div>
        </>
    );
}
