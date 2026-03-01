import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import SocialLogo from './Components/logo/Logo';

export default function Home() {
  const interests = ["Computer Vision", "MLOps", "Deep Learning", "Edge Computing"];
  const fullName = "Muhammad Burhan Ahmed";
  const email = "burhan.ahmed60090@gmail.com";
  const [copied, setCopied] = useState(false);

  const experienceList = [
    {
      role: "Junior Data Scientist",
      company: "OIRRC ",
      period: "November 2025 - February 2026",
      description: "Contributing to data-driven R&D projects in healthcare, focusing on ocular imaging. Built and evaluated deep learning models and deployed services to support various tools and applications within the institute."
    },
    {
      role: "Lab Engineer",
      company: "Air University ",
      period: "August 2025 - Present",
      description: "Teaching and assisting students in lab sessions, supporting course experiments and hands-on projects."
    },
    {
      role: "AI Intern",
      company: "Jantah Tech ",
      period: "July 2023 - September 2023",
      description: "Developed chatbots using Flask and SQLite for local datasets, enabling features such as appointment booking and patient query handling. Gained practical experience with Cloudinary, Git for version control, and Postman for API testing."
    },
    {
      role: "Computer Vision Engineer & GenAI Intern",
      company: "Botmer International ",
      period: "April 2025 - June 2025",
      description: "Worked on an AI-powered application for visual scene understanding in industrial safety environments. Managed the end-to-end DL pipeline for real-time inference. Deployed models using FastAPI. Leveraged tools including Ultralytics YOLO, Roboflow, TensorBoard and OpenCV."
    },
  ];

  const researchWorkList = [
    {
      title: "SWiM3: Solid Waste Mapping Dataset",
      publishedAt: "5th International IEEE Conference on Digital Futures and Transformative Technologies",
      status: "Submitted/Done",
      description: "Developed a solid waste dataset containing 6,429 images and 25,234 annotated instances across 3 categories."
    },
    {
      title: "An Explainable and Edge-Deployable Deep Learning Framework for Smart Waste Classification",
      publishedAt: "Journal",
      status: "In Progress",
      description: "Designed and deployed a deep learning-based smart waste classification system on a Raspberry Pi, enabling edge inference. Conducted a comparative study of state-of-the-art object detection models to identify the most effective architecture for real-time performance. Integrated explainable AI techniques to interpret model predictions."
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Head>
        <title>Burhan Portfolio</title>
      </Head>

      <main className="flex flex-col items-center max-w-7xl mx-auto px-6 md:px-12 gap-10 pb-10 pt-52">

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-20">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="md:w-1/2 space-y-6 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">About Me</h1>
            <p className="text-base sm:text-lg leading-relaxed">
              A <span className="text-Bblue-500 font-semibold">Computer Engineering</span> graduate from
              <span className="text-Bblue-500 font-semibold"> Air University, Islamabad</span>,
              with expertise in Computer Vision and API Development.
              Currently exploring deployment and AI to drive intelligent solutions.
            </p>

            {/* Full Name & Email with Copy */}
            <div className="mt-4 flex items-center space-x-2 text-gray-600 font-medium">
              <span className='border-b'>{email}</span>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all text-sm"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Interests */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">My Interests</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120, damping: 10, duration: 0.6 }}
            className="md:w-1/2 max-w-md bg-white rounded-2xl p-10 flex flex-col items-center cursor-pointer shadow-[inset_0_12px_12px_rgba(0,0,0,0.15)]"
          >
            <motion.div
              className="w-56 h-56 md:w-64 md:h-64 mb-6 rounded-full overflow-hidden border-4 border-blue-500"
              whileHover={{ rotate: 3, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
            >
              <img src="./Home/me.png" alt="Burhan" className="w-full h-full object-cover" />
            </motion.div>

            <p className="text-black font-semibold mb-4 text-center">{fullName}</p>
            <div className="w-full border-t border-gray-300 my-4"></div>

            <div className="flex space-x-6">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/muhammad-burhan-ahmed-86ab7b10a/">
                <SocialLogo logoname="fab fa-linkedin" bgColor="linkedin" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Burhan-Ahmed">
                <SocialLogo logoname="fab fa-github" bgColor="github" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.kaggle.com/muhammadburhanahmed">
                <SocialLogo logoname="fab fa-kaggle" bgColor="black" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="w-full border-t border-gray-300 my-4"></div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-3/4 space-y-6 text-left"
        >
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          {experienceList.map((exp, idx) => (
            <div key={idx} className="bg-gray-50 p-4 text-black rounded-lg mb-4 shadow-[inset_0_3px_6px_rgba(0,0,0,0.12)]">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="">
                <span className='text-Bblue-500 font-semibold'>
                  {exp.company}
                </span>
                | {exp.period}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Research Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-3/4 sppace-y-6 text-left"
        >
          <h2 className="text-3xl font-bold mb-4">Research Work</h2>
          {researchWorkList.map((work, idx) => {
            const statusColor =
              work.status.toLowerCase().includes("done")
                ? "text-green-600"
                : work.status.toLowerCase().includes("progress")
                  ? "text-amber-600"
                  : "text-gray-500";
            return (
              <div
                key={idx}
                className="bg-gray-50 ps-4 py-4 text-black rounded-lg shadow-[inset_0_3px_6px_rgba(0,0,0,0.12)] mb-4"
              >
                <h3 className="text-xl font-semibold mb-1">Paper Title: {work.title}</h3>
                <p className="text-gray-500 text-sm mb-1">
                  <span className="font-medium">Published At:</span> {work.publishedAt} |{" "}
                  <span className="font-medium">Status:</span>{" "}
                  <span className={statusColor}>{work.status}</span>
                </p>
                <p className="text-gray-700 mt-2">{work.description}</p>
              </div>
            );
          })}


        </motion.div>

      </main>
    </>
  );
}
