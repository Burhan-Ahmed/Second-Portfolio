
export default function Home() {
    return (
        <header className="w-max flex fixed">
            <div class="m-5 ms-8 relative border-4 border-red-500 text-xl w-14 h-14 rounded-full flex justify-center items-center p-5">
                B
            </div>
            <nav className="my-auto">
                <ul className="ms-12 flex py-auto text-xl space-x-20">
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        Skills
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    )
}
