import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function NavBar() {
    const currentRoute = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="mt-4 w-full bg-black shadow-md lg:mx-24 relative lg:fixed top-0 left-0 z-50">
            <div className="relative flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 md:px-14 py-4">
                <div className="flex items-center justify-between w-full sm:w-auto">
                    <Link href="/">
                        <div className="logo p-6 font-bold relative cursor-pointer hover:text-Bblue-400 hover:border-white border-4 border-Bblue-400 text-xl w-14 h-14 rounded-full flex justify-center items-center">
                            B
                        </div>
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
                <nav className={`w-full ${isOpen ? 'block' : 'hidden'} sm:flex sm:items-center sm:justify-between`}>
                    <ul className="ms-5 flex flex-col sm:flex-row font-medium text-xl space-y-4 sm:space-y-0 sm:space-x-16 px-10 sm:px-0">
                        <li>
                            <Link href="/Components/About/About" className={`block p-2 ${currentRoute === "/Components/About/About" ? "text-Bblue-400" : ""} hover:text-Bblue-400`}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/Components/Projects/Project" className={`block p-2 ${currentRoute === "/Components/Projects/Project" ? "text-Bblue-400" : ""} hover:text-Bblue-400`}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/Components/Contact/Contact" className={`block p-2 ${currentRoute === "/Components/Contact/Contact" ? "text-Bblue-400" : ""} hover:text-Bblue-400`}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
