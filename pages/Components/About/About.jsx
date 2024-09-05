import ProgrammingLogo from "./SkillSet";
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faBootstrap, faCss3Alt, faHtml5, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import tailwindIcon from '@iconify-icons/logos/tailwindcss-icon';
import nodeJsIcon from '@iconify-icons/logos/nodejs';
import expressIcon from '@iconify-icons/logos/express';
import cppIcon from '@iconify-icons/mdi/language-cpp';
import pythonIcon from '@iconify-icons/logos/python';
import gitIcon from '@iconify-icons/logos/git';
import githubIcon from '@iconify-icons/skill-icons/github-dark';
import tensorflowIcon from '@iconify-icons/logos/tensorflow';
import matlabIcon from '@iconify-icons/skill-icons/matlab-light';
import opencv from '@iconify-icons/logos/opencv';
import cIcon from '@iconify-icons/mdi/language-c';
import mongodbIcon from '@iconify-icons/logos/mongodb';




export default function About() {

    const DownloadResume = () => {
        const fileUrl = '/files/Resume.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <Head>
                <title>About Burhan</title>
            </Head>
            <div className="flex flex-col md:flex-row items-center mx-36 space-x-10 h-screen">
                <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                    <div className="profile w-72 h-72 md:w-96 md:h-96 rounded-full bg-gray-200 shadow-lg">
                    </div>
                </div>
                <div className=" py-5 w-full md:w-2/3 space-y-4 px-4 mt-20">
                    <h1 className="text-3xl md:text-4xl font-semibold border-b-4 pb-1">
                        ABOUT
                    </h1>
                    <p className="text-base md:text-lg">
                        As a computer engineering student at Air University, Islamabad, I am passionate about Web Development and Machine Learning. I have achieved multiple certifications and projects in these domains, demonstrating my skills and knowledge.
                        I have also gained valuable work experience as a web developer intern at various organizations. In these roles, I contributed to the design, development, and deployment of user-friendly and data-driven web applications and solutions, working with diverse teams and stakeholders.
                        I am always eager to learn new technologies and tools to expand my network and portfolio.
                    </p>
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold border-b-4 border-white mb-4">
                            Skills
                        </h2>
                        <div className="customBox px-10 py-2 text-black font-semibold text-base md:text-lg bg-white rounded-md shadow-md">
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <p className="mt-9">FrontEnd</p>
                                <motion.div
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    className="flex gap-3"
                                >
                                    <FontAwesomeIcon icon={faReact} style={{ color: '#61DBFB', fontSize: '100px' }} />
                                    <Icon icon={tailwindIcon} style={{ fontSize: '100px' }} />
                                    <FontAwesomeIcon icon={faBootstrap} style={{ color: '#563d7c', fontSize: '100px' }} />
                                    <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4', fontSize: '100px' }} />
                                    <FontAwesomeIcon icon={faHtml5} style={{ color: '#e34c26', fontSize: '100px' }} />
                                    <FontAwesomeIcon icon={faJsSquare} style={{ color: '#f0db4f', fontSize: '100px' }} />
                                </motion.div>

                            </div>
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <p>BackEnd</p>
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, delay: 0.5 }}
                                    className="flex flex-wrap gap-3"
                                >
                                    <Icon icon={nodeJsIcon} style={{ fontSize: '30px' }} />
                                    <Icon icon={expressIcon} style={{ fontSize: '30px' }} />
                                </motion.div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <p className="flex items-center mt-1">DataBase</p>
                                <motion.div
                                    initial={{ opacity: 0, y: 100, x: 100 }}
                                    animate={{ opacity: 1, y: 0, x: 0 }}
                                    transition={{ duration: 0.7, delay: 1 }}
                                    className="flex gap-6"
                                >
                                    <Icon icon={mongodbIcon} style={{ fontSize: '30px' }} />
                                </motion.div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <p className="flex items-center">UI Design</p>
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, delay: 0.7 }}
                                    className="flex items-center"
                                >
                                    <ProgrammingLogo Img={"Figma"} dimension={80} />
                                </motion.div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <p className="flex items-center">Programming Languages and Libraries</p>
                                <motion.div
                                    initial={{ opacity: 0, y: 100, x: -100 }}
                                    animate={{ opacity: 1, y: 0, x: 0 }}
                                    transition={{ duration: 0.7, delay: 0.9 }}
                                    className="flex flex-wrap gap-3"
                                >
                                    <Icon icon={cIcon} style={{ fontSize: '30px' }} />
                                    /<Icon icon={cppIcon} style={{ fontSize: '30px' }} />
                                    <Icon icon={pythonIcon} style={{ fontSize: '30px' }} />
                                    <Icon icon={tensorflowIcon} style={{ fontSize: '30px' }} />
                                    <Icon icon={opencv} style={{ fontSize: '30px' }} />
                                    <Icon icon={matlabIcon} style={{ fontSize: '30px' }} />
                                </motion.div>

                            </div>
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <p className="flex items-center">Version Control</p>
                                <motion.div
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 1 }}
                                    className="flex gap-6"
                                >
                                    <Icon icon={gitIcon} style={{ fontSize: '30px' }} />
                                    <Icon icon={githubIcon} style={{ fontSize: '30px' }} />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={DownloadResume}
                        className="Info py-2 px-6 border border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-black transition duration-300">
                        Download Resume
                    </button>
                </div>
            </div>
        </>
    );
}
