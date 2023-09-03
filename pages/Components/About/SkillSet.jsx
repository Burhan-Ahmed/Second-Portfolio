import Image from 'next/image'

export default function Logo({ Img }) {

    return (
        <>
            <Image
                src={`/About/${Img}.png`}
                alt={`${Img} Icon`}
                width={50}
                height={50}
            />
        </>
    )
}