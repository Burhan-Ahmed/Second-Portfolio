import Head from 'next/head';
import Image from 'next/image';
import SocialLogo from './Logo';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Me</title>
            </Head>
            <div className="Page h-screen py-44 flex justify-evenly">
                <div className="contain ">
                    <h1 className="mt-5 text-7xl mb-2">Get in Touch</h1>
                    <h5 className="text-lg mb-10">
                        Feel Free To Contact
                    </h5>
                    <p className="mt-72 py-4 px-10 border text-lg backdrop-blur-2xl rounded-2xl">
                        Hello! I am here to help you. <br />
                        If you want to know something or you have any suggestion then please mail me. Thank You.
                    </p>
                    <div className="mt-10 rounded-lg inline-flex">
                        <Image
                            src={"/mail.png"}
                            alt='Mail Icon'
                            width={50}
                            height={50}
                            className={"bg-white rounded-full"}
                        />
                        <input className="ps-5 ms-5 w-96 text-lg rounded-s-lg text-white" type="email" disabled value={"burhan.ahmed60090@gmail.com"} />
                        <button type='submit' className='Info px-4 rounded-e-lg text-black text-lg bg-Bblue-400'>
                            Copy
                        </button>
                    </div>
                </div>
                <div className="p-20 items-center font-mono text-lg border rounded-3xl backdrop-blur-md">
                    <form action="GET" className="flex flex-col space-y-3 text-black">
                        <input className="p-4 focus:outline-none rounded-lg" type="text" placeholder="Your Name" required />
                        <input className="p-4 focus:outline-none rounded-lg" type="email" placeholder="Email" required />
                        <textarea cols="40" rows="8" className="p-4 focus:outline-none rounded-lg" placeholder='Your Message' required></textarea>
                        <button type="submit" className="Info w-max mt-4 px-4 py-1 text-white rounded-full border-4">
                            SUBMIT
                        </button>
                    </form>
                    <div className="mt-10 flex justify-center space-x-8">
                        <a target='_blank' href="https://www.linkedin.com/in/muhammad-burhan-ahmed-86ab7b10a/">
                            <SocialLogo logoname={"fab fa-linkedin"} bgColor={"linkedin"} />
                        </a>
                        <a target='_blank' href="https://github.com/Burhan-Ahmed">
                            <SocialLogo logoname={"fab fa-github"} bgColor={"github"} />
                        </a>
                        <a target='_blank' href="https://www.facebook.com/profile.php?id=100009498011818">
                            <SocialLogo logoname={"fab fa-facebook-f"} bgColor={"facebook"} />
                        </a>
                        <a target='_blank' href="https://www.instagram.com/burh.2k/">
                            <SocialLogo logoname={"fab fa-instagram"} bgColor={"instagram"} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}