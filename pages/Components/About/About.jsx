import Logo from "./SkillSet"

export default function About() {
    return (
        <div className="flex  items-center h-screen">
            <div className="ms-96 w-96 h-96 rounded-full border">
            </div>
            <div className="w-max ms-40 space-y-10">
                <h1 className="w-max h-max pb-2 text-4xl font-semibold border-b-4">
                    ABOUT
                </h1>
                <p className="paragraph text-xl">
                    As a computer engineering student at Air University, Islamabad, I am passionate about Web Development and Machine Learning. I have achieved multiple certifications and projects in these domains, demonstrating my skills and knowledge.
                    I have also gained valuable work experience as a web developer intern at various organizations. In these roles, I contributed to the design, development, and deployment of user-friendly and data-driven web applications and solutions, working with diverse teams and stakeholders.
                    I am always eager to learn new technologies and tools to expand my network and portfolio.
                </p>
                <div>
                    <h1 className="w-max h-max pb-2 text-2xl border-b-4">
                        Skills
                    </h1>
                    <div className="text-lg">
                        <div className="flex justify-between">
                            <p>
                                FRONTEND
                            </p>
                            <div className="flex">
                                <Logo Img={"cppIcon"} />
                                <Logo Img={"cppIcon"} />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p>
                                BACKEND
                            </p>
                            <div className="flex">
                                <Logo Img={"cppIcon"} />
                                <Logo Img={"cppIcon"} />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p>
                                UI
                            </p>
                            <div className="flex">
                                <Logo Img={"cppIcon"} />
                                <Logo Img={"cppIcon"} />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p>
                                Programming Language
                            </p>
                            <div className="flex">
                                <Logo Img={"cppIcon"} />
                                <Logo Img={"cppIcon"} />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p>
                                Version Control
                            </p>
                            <div className="flex">
                                <Logo Img={"cppIcon"} />
                                <Logo Img={"cppIcon"} />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="py-2 px-5 border font-semibold rounded-full" type="submit">
                    Download Resume
                </button>
            </div>

        </div >
    )
}