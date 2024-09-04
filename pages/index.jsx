import React from 'react';
import Head from 'next/head';
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Home() {

  return (
    <>
      <Head>
        <title>Burhan Portfolio</title>
      </Head>
      <main className="flex flex-col md:flex-row justify-center items-center min-h-screen px-4 md:px-20 space-y-10 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 md:mb-0 md:mr-10 space-y-3 text-center md:text-left"
        >
          <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Hi, I&apos;m Burhan
          </h2>
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Novice MERN Stack Developer
          </h2>
          <p className="max-w-xs sm:max-w-sm md:max-w-md">
            High Level Experience in Web Design and development Knowledge, producing quality work.
          </p>
          <button className="py-2 px-4 bg-blue-700 rounded-lg font-semibold text-white hover:bg-blue-800 transition-all">
            <Link href="/Components/About/About.jsx">
              More About Me
            </Link>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-shrink-0"
        >
          <div
            className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] z-[10]"
          >
            <svg viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <mask id="blob-mask" x="0" y="0" width="170" height="170">
                  <path
                    fill='white'
                    d="M40,-67.3C52.6,-62,64,-52.8,73.3,-40.9C82.6,-29.1,89.6,-14.5,91.4,1C93.2,16.6,89.8,33.2,80.8,45.6C71.8,58,57.4,66.2,43,71C28.6,75.8,14.3,77.3,0.5,76.4C-13.3,75.5,-26.6,72.3,-39.3,66.5C-52,60.7,-64.1,52.4,-74.1,40.9C-84,29.4,-91.8,14.7,-91,0.4C-90.3,-13.8,-81,-27.6,-70.7,-38.6C-60.5,-49.6,-49.3,-57.8,-37.4,-63.5C-25.4,-69.1,-12.7,-72.2,0.5,-73.1C13.7,-73.9,27.4,-72.6,40,-67.3Z"
                    transform="translate(100 100)"
                  />
                </mask>
              </defs>
              <image
                href="https://res.cloudinary.com/dpil2pczb/image/upload/v1725479658/IMG_4617_prhzhh.jpg"
                x="0"
                y="0"
                width="200"
                height="200"
                mask="url(#blob-mask)"
              />
            </svg>
          </div>


        </motion.div>
      </main>
    </>
  );
}
