import ProgrammingLogo from "./SkillSet"
import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>About Burhan</title>
            </Head>
            <div className="flex items-center h-screen">
                <div className="profile w-96 ms-96 h-96 rounded-full border">

                </div>
                <div className="w-max ms-40 space-y-4">
                    <h1 className="w-max h-max pb-1 text-4xl font-semibold border-b-4">
                        ABOUT
                    </h1>
                    <p className="paragraph text-xl">
                        As a computer engineering student at Air University, Islamabad, I am passionate about Web Development and Machine Learning. I have achieved multiple certifications and projects in these domains, demonstrating my skills and knowledge.
                        I have also gained valuable work experience as a web developer intern at various organizations. In these roles, I contributed to the design, development, and deployment of user-friendly and data-driven web applications and solutions, working with diverse teams and stakeholders.
                        I am always eager to learn new technologies and tools to expand my network and portfolio.
                    </p>
                    <div>
                        <h1 className="w-max mb-5 h-max pb-1 text-2xl border-b-4">
                            Skills
                        </h1>
                        <div className="customBox p-5 text-black text-lg bg-white rounded-md">
                            <div className="flex justify-between">
                                <p className="text-xl font-semibold">
                                    FRONTEND
                                </p>
                                <div className="flex space-x-3 me-2">
                                    <ProgrammingLogo Img={"BootstrapIcon"} dimension={65} />
                                    <ProgrammingLogo Img={"CSSIcon"} dimension={60} />
                                    <ProgrammingLogo Img={"htmlIcon"} dimension={60} />
                                    <ProgrammingLogo Img={"JS"} dimension={60} />
                                    <ProgrammingLogo Img={"ReactIcon"} dimension={70} />
                                    <ProgrammingLogo Img={"tailwind"} dimension={130} />
                                    <ProgrammingLogo Img={"nextIcon"} dimension={130} />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xl font-semibold">
                                    BACKEND
                                </p>
                                <div className="flex space-x-2 me-2">
                                    <ProgrammingLogo Img={"node"} dimension={130} />
                                    <ProgrammingLogo Img={"express"} dimension={130} />
                                </div>
                            </div>
                            <div className="flex justify-between ">
                                <p className="text-xl flex items-center font-semibold">
                                    UI DESIGN
                                </p>
                                <div className="flex me-2">
                                    <ProgrammingLogo Img={"Figma"} dimension={100} />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xl flex items-center font-semibold">
                                    PROGRAMMING LANGUAGES
                                </p>
                                <div className="flex space-x-3 my-3 me-2">
                                    <ProgrammingLogo Img={"cppIcon"} dimension={60} />
                                    <ProgrammingLogo Img={"PythonIcon"} dimension={60} />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xl flex items-center font-semibold">
                                    VERSION CONTROL
                                </p>
                                <div className="flex space-x-6 me-2">
                                    <div>
                                        <ProgrammingLogo Img={"git"} dimension={70} />

                                    </div>
                                    <div>
                                        <ProgrammingLogo Img={"github"} dimension={50} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="Info py-2 px-5 border font-semibold rounded-full" type="submit">
                        Download Resume
                    </button>
                </div>
            </div >
        </>
    )
}