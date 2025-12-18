export default function SocialLogo({ logoname, bgColor }) {
    return (
        <div
            className={`
        ${bgColor} 
        w-16 h-16 md:w-20 md:h-20 
        text-2xl md:text-3xl 
        shadow-xl bg-black hover:shadow-2xl 
        transition-shadow duration-300 
        flex items-center justify-center 
        rounded-full cursor-pointer
      `}
        >
            <i className={`${logoname}`}></i>
        </div>
    );
}
