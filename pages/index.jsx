import Image from 'next/image'
import NavBar from '../Components/NavBar.jsx'

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex justify-between items-center">
        <div className="ms-28 space-y-3">
          <h2 className="font-semibold text-8xl border">
            Hi, I'm Burhan
          </h2>
          <h2 className="ps-1.5 font-semibold text-xl border">
            Frontend Developer
          </h2>
          <p className="ps-1.5">
            High Level Experience in Web Design and development Knowledge, producing quality work.
          </p>
          <button className="py-2 px-3 bg-red-500  border border-red-400 rounded-lg">
            More About Me
          </button>
        </div>
        <div className="me-28">
          <Image
            src="/Me.jpeg"
            alt="My Picture"
            width={678}
            height={678}
          />
        </div>
      </main>
    </>
  )
}
