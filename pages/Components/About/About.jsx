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
      <div className="flex flex-col lg:flex-row items-center lg:items-start mx-4 sm:mx-8 lg:mx-24 xl:mx-36 space-y-8 lg:space-y-0 lg:space-x-10 min-h-screen py-10">
        {/* Profile Section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="profile w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-gray-200 shadow-lg"></div>
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-semibold border-b-4 pb-1">
            ABOUT
          </h1>
          <p className="text-base sm:text-lg leading-relaxed">
            As a computer engineering student at Air University, Islamabad, I am passionate about Web Development and Machine Learning. I have achieved multiple certifications and projects in these domains, demonstrating my skills and knowledge. I have also gained valuable work experience as a web developer intern at various organizations. In these roles, I contributed to the design, development, and deployment of user-friendly and data-driven web applications and solutions, working with diverse teams and stakeholders.
          </p>

          {/* Skills Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold border-b-4 border-white mb-4">
              Skills
            </h2>
            <div className="customBox p-6 bg-white rounded-md shadow-md space-y-6">
              {/** Frontend Skills **/}
              <SkillRow title="FrontEnd">
                <SkillIcons
                  icons={[
                    { icon: faReact, color: '#61DBFB' },
                    { icon: tailwindIcon },
                    { icon: faBootstrap, color: '#563d7c' },
                    { icon: faCss3Alt, color: '#264de4' },
                    { icon: faHtml5, color: '#e34c26' },
                    { icon: faJsSquare, color: '#f0db4f' },
                  ]}
                />
              </SkillRow>

              {/** Backend Skills **/}
              <SkillRow title="BackEnd">
                <SkillIcons icons={[{ icon: nodeJsIcon }, { icon: expressIcon }]} />
              </SkillRow>

              {/** Database Skills **/}
              <SkillRow title="DataBase">
                <SkillIcons icons={[{ icon: mongodbIcon }]} />
              </SkillRow>

              {/** UI Design Skills **/}
              <SkillRow title="UI Design">
                <ProgrammingLogo Img={"Figma"} dimension={60} />
              </SkillRow>

              {/** Programming Languages **/}
              <SkillRow title="Programming Languages and Libraries">
                <SkillIcons
                  icons={[
                    { icon: cIcon },
                    { icon: cppIcon },
                    { icon: pythonIcon },
                    { icon: tensorflowIcon },
                    { icon: opencv },
                    { icon: matlabIcon },
                  ]}
                />
              </SkillRow>

              {/** Version Control **/}
              <SkillRow title="Version Control">
                <SkillIcons icons={[{ icon: gitIcon }, { icon: githubIcon }]} />
              </SkillRow>
            </div>
          </div>

          {/* Resume Download Button */}
          <button
            onClick={DownloadResume}
            className="Info py-2 px-6 border border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-black transition duration-300"
          >
            Download Resume
          </button>
        </div>
      </div>
    </>
  );
}

/** Helper Component for Skill Rows */
function SkillRow({ title, children }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between mb-6">
      <p className="font-medium mb-2 sm:mb-0">{title}</p>
      <div className="flex gap-4 flex-wrap">{children}</div>
    </div>
  );
}

/** Helper Component for Skill Icons */
function SkillIcons({ icons }) {
  return icons.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Icon icon={item.icon} style={{ fontSize: '40px', color: item.color || 'black' }} />
    </motion.div>
  ));
}
