import Image from 'next/image'

export default function ProgrammingLogo({ Img, dimension }) {

    return (
        <div className="w-auto my-auto">
            <Image
                src={`/About/${Img}.png`}
                alt={`${Img} Icon`}
                width={dimension}
                height={dimension}
            />
        </div>
    )
}