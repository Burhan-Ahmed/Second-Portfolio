import Link from "next/link"

export default function Home() {
    return (
        <header className="w-max flex fixed">
            <div className="logo m-10 font-bold relative border-4 border-Bblue-400 text-xl w-14 h-14 rounded-full flex justify-center items-center p-5">
                B
            </div>
            <nav className="my-auto">
                <ul className="ms-10 flex font-medium py-auto text-xl space-x-20">
                    <li>
                        <Link href="/">
                            Home
                        </Link >
                    </li>
                    <li>
                        <Link href="/Components/About/About">
                            About
                        </Link >
                    </li>
                    <li>
                        <Link href="/Components/Project">
                            Projects
                        </Link >
                    </li>
                    <li>
                        <Link href="/Components/Contact">
                            Contact
                        </Link >
                    </li>
                </ul>
            </nav>
        </header>
    )
}
