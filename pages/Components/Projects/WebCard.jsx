import Image from 'next/image';

export default function WebCard({ Title, picture, link }) {
    return (
        <div className="relative cursor-pointer flex-none w-full">
            <Image
                src={`/Projects/${picture}.png`}
                alt={Title}
                layout="responsive"
                width={500}
                height={500}
                className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-7 pb-10 opacity-0 hover:opacity-100 hover:backdrop-blur-sm transition-opacity duration-300 bg-gradient-to-t from-black to-transparent">
                <h1 className="text-white text-2xl md:text-4xl font-bold">
                    {Title}
                </h1>
                <a href={`https://github.com/Burhan-Ahmed/${link}`} target='_blank' rel="noopener noreferrer">
                    <p className="text-lg font-extrabold underline text-blue-500">
                        Click here for More
                    </p>
                </a>
            </div>
        </div>
    )
}
