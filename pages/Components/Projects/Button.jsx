import Image from 'next/image';

export default function ArrowButton({ rotation }) {

    return (
        <Image
            src="/arrow.png"
            alt="Website Sample"
            width={70}
            height={70}
            className={`bg-Bblue-400 rounded-full ${rotation}`}
        />
    )
}
