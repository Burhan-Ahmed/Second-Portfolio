import Image from 'next/image';

export default function WebCard({ Title, picture, link }) {

    return (
        <div className="flex-none relative cursor-pointer">
            <Image
                src={`/Projects/${picture}.png`}
                alt="Website Sample"
                width={975}
                height={975}
            />
            <div className="ps-7 pb-10 flex flex-col justify-end absolute opacity-0 inset-0 hover:opacity-100 hover:backdrop-blur-sm">
                <h1 className="text-black text-4xl">
                    {Title}
                </h1>
                <a href={`https://github.com/Burhan-Ahmed/${link}`} target='_blank'>
                    <p className="text-lg font-extrabold underline text-Bblue-700">Click here for More</p>
                </a>
            </div>
        </div>

    )
}