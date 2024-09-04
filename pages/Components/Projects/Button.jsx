import Image from 'next/image';

export default function ArrowButton({ rotation }) {
    return (
        <div className={`bg-Bblue-400 rounded-full p-2 ${rotation}`}>
            <Image
                src="/arrow.png"
                alt="Arrow"
                width={30}
                height={30}
                className="w-8 h-8"
            />
        </div>
    );
}
