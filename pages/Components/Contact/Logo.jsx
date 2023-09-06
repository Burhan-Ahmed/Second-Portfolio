
export default function SocialLogo({ logoname, bgColor }) {

    return (
        <>
            <div className={`${bgColor} w-16 h-16 text-2xl shadow-2xl bg-slate-800 flex items-center justify-center rounded-full`}>
                <span><i className={`${logoname}`}></i></span>
            </div>
        </>
    )
}