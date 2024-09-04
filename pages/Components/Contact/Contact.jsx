import Head from 'next/head';
import React, { useState } from 'react';
import SocialLogo from './Logo';
import { motion } from 'framer-motion';

export default function Contact() {
    const [isCopied, setIsCopied] = useState(false);
    const [hovered, setHovered] = useState(false);

    const email = "burhan.ahmed60090@gmail.com";
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1300);
        } catch (error) {
            console.error('Failed to copy text: ', error);
        }
    };

    return (
        <>
            <Head>
                <title>Contact Me</title>
            </Head>
            <div className="w-full x-32 my-36 py-10 sm:px-8 lg:px-16 flex flex-col lg:flex-row">

                <div className="flex-1 bg-cover bg-center bg-no-repeat p-10 rounded-s-lg flex flex-col justify-between"
                    style={{ backgroundImage: `url('https://res.cloudinary.com/dpil2pczb/image/upload/v1724521918/jesse-gardner-OwWbUOIbhDY-unsplash_mvxv7h.jpg')` }}>
                    <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2 text-center lg:text-left text-white">Get in Touch</h1>
                        <h5 className="text-lg sm:text-xl mb-6 text-center lg:text-left text-white">Feel Free To Contact</h5>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <p className="py-4 px-6 backdrop-blur-md border border-white bg-opacity-70 text-base sm:text-lg text-white rounded-xl text-center lg:text-left">
                                Hello! I am here to help you. <br />
                                If you want to know something or you have any suggestions, please email me. Thank you.
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="mt-8 flex flex-col sm:flex-row items-center sm:items-start"
                    >
                        <div className="flex flex-col sm:flex-row items-center sm:mt-0 sm:ms-2">
                            <input
                                className="px-4 py-2 w-full sm:w-64 md:w-80 rounded-lg text-white bg-gray-700 focus:ring-0"
                                type="email"
                                disabled
                                value={email}
                            />
                            <button
                                onClick={handleCopy}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                className={`mt-4 sm:mt-0 sm:ms-4 px-4 py-2 rounded-lg text-black transition-colors duration-300 ${isCopied ? 'bg-green-500 text-white' : 'bg-white'
                                    } ${hovered ? 'hover:bg-gray-300' : ''}`}
                            >
                                {isCopied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                    </motion.div>
                </div>



                <div className="flex-1 p-10 bg-white border rounded-e-lg shadow-md flex flex-col justify-between">
                    <form action="POST" className="flex flex-col space-y-2 text-black">
                        <input className="p-4 focus:outline-none rounded-lg border border-gray-300" type="text" placeholder="Your Name" required />
                        <input className="p-4 focus:outline-none rounded-lg border border-gray-300" type="email" placeholder="Email" required />
                        <textarea cols="40" rows="8" className="p-4 focus:outline-none rounded-lg border border-gray-300" placeholder='Your Message' required></textarea>
                        <button type="submit" className="mt-4 px-4 py-2 text-white rounded-xl border-4 bg-black hover:bg-white hover:text-black hover:border-black transition-colors duration-300">
                            SUBMIT
                        </button>
                    </form>
                    <div className="mt-6 flex justify-center space-x-2 lg:space-x-2 flex-wrap">
                        <a target='_blank' href="https://www.linkedin.com/in/muhammad-burhan-ahmed-86ab7b10a/" rel="noopener noreferrer">
                            <SocialLogo logoname={"fab fa-linkedin"} bgColor={"linkedin"} />
                        </a>
                        <a target='_blank' href="https://github.com/Burhan-Ahmed" rel="noopener noreferrer">
                            <SocialLogo logoname={"fab fa-github"} bgColor={"github"} />
                        </a>
                        <a target='_blank' href="https://www.facebook.com/profile.php?id=100009498011818" rel="noopener noreferrer">
                            <SocialLogo logoname={"fab fa-facebook-f"} bgColor={"facebook"} />
                        </a>
                        <a target='_blank' href="https://www.instagram.com/burh.2k/" rel="noopener noreferrer">
                            <SocialLogo logoname={"fab fa-instagram"} bgColor={"instagram"} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
