import Link from "next/link"

export default function Home() {
    return (
        <header className="w-max flex fixed">
            <div className="logo m-5 ms-8 font-bold relative border-4 border-Bblue-400 text-xl w-14 h-14 rounded-full flex justify-center items-center p-5">
                B
            </div>
            <nav className="my-auto">
                <ul className="ms-12 flex font-medium py-auto text-2xl space-x-20">
                    <li>
                        <Link href="/">
                            Home
                        </Link >
                    </li>
                    <li>
                        <Link href="/About">
                            About
                        </Link >
                    </li>
                    <li>
                        <Link href="/Project">
                            Projects
                        </Link >
                    </li>
                    <li>
                        <Link href="/Skills">
                            Skills
                        </Link >
                    </li>
                    <li>
                        <Link href="/Contact">
                            Contact
                        </Link >
                    </li>
                </ul>
            </nav>
        </header>
    )
}
