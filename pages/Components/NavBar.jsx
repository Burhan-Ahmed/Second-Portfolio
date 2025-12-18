import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'

export default function NavBar() {
    const currentRoute = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [time, settimer] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            const { getTimeForCountry } = require('clock-live')
            settimer(getTimeForCountry('PK'))
        }, 1000)

        return () => clearInterval(interval)

    });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full absolute">
            <div className="text-3xl font-medium flex justify-around py-8 px-64">
                <div className="border-r pe-4 ">
                    <Link href="/" className="logo font-bold cursor-pointer hover:text-Bblue-400">
                        Burhan Ahmed
                    </Link>
                    <button
                        className="block sm:hidden p-2 text-Bblue-400 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <motion.div initial={{ opacity: 0 }} // Start with 0 opacity
                    animate={{ opacity: 1 }} // Fade in
                    transition={{ duration: 2 }} // 1s fade duration
                    className="w-36"
                >
                    {time ? time.split(" ")[1] : "\u00A0"}
                </motion.div>
                <div className="">
                    <nav className={`w-full ${isOpen ? 'block' : 'hidden'} sm:flex sm:items-center sm:justify-between`}>
                        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12 sm:px-0">
                            <li>
                                <Link
                                    href="https://green-bot.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-Bblue-400"
                                >
                                    FYP
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="/files/Muhammad_Burhan_Ahmed_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-0.5 border border-Bblue-400 rounded-md hover:bg-Bblue-400 hover:text-white transition-all"
                                >
                                    Resume
                                </a>
                            </li>


                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
