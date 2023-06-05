export function Button({link, text}:{link?:string, text:string}){
    return <button aria-label={text} className="rounded-2xl bg-lightGreen py-1 px-2 my-1 font-openSans text-white font-bold text-xl hover:bg-darkGreen focus:bg-darkGreen focus:outline-none focus:ring focus:ring-white">
        {text}
    </button>
}