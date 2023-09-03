import Image from 'next/image'
import Head from 'next/head';
import Link from "next/link"


export default function Home() {
  return (
    <>
      <Head>
        <title>Burhan Portfolio</title>
      </Head>
      <main className="flex justify-between items-center">
        <div className="ms-40 space-y-3">
          <h2 className="font-semibold text-8xl">
            Hi, I&apos;m Burhan
          </h2>
          <h2 className="ps-1.5 font-semibold text-xl">
            Frontend Developer
          </h2>
          <p className="ps-1.5 pb-5">
            High Level Experience in Web Design and development Knowledge, producing quality work.
          </p>
          <button className="py-2 px-3 bg-Bblue-700  rounded-lg font-semibold">
            <Link href="/Components/About">
              More About Me
            </Link >
          </button>
        </div>
        <div className="me-40">
          <Image
            src="/Home/Me.jpeg"
            alt="My Picture"
            width={678}
            height={678}
          />
        </div>
      </main>
    </>
  )
}
