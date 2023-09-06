import Link from "next/link"
import { usePathname } from 'next/navigation';


export default function Home() {
    const currentRoute = usePathname();

    return (
        <header className="w-max flex fixed">
            <Link href="/" >
                <div className="logo p-6 m-12 font-bold relative cursor-pointer hover:text-Bblue-400 hover:border-white border-4 border-Bblue-400 text-xl w-14 h-14 rounded-full flex justify-center items-center ">
                    B
                </div>
            </Link >
            <nav className="my-auto">
                <ul className="ms-10 flex font-medium py-auto text-xl space-x-20">
                    <li>
                        <Link href="/Components/About/About" className={(currentRoute === "/Components/About/About") ? "text-Bblue-400" : ""}>
                            About
                        </Link >
                    </li>
                    <li>
                        <Link href="/Components/Projects/Project" className={(currentRoute === "/Components/Projects/Project") ? "text-Bblue-400" : ""}>
                            Projects
                        </Link >
                    </li>
                    <li>
                        <Link href="/Components/Contact/Contact" className={(currentRoute === "/Components/Contact/Contact") ? "text-Bblue-400" : ""}>
                            Contact
                        </Link >
                    </li>
                </ul>
            </nav>
        </header >
    )
}
