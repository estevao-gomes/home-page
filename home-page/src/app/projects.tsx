import { Project } from "@/components/Project";

import websiteDesktop from "@/assets/websiteDesktop.png"
import websiteMobile from "@/assets/websiteMobile.png"

export function Projects(){
    return (
        <section className="flex flex-col items-center mt-4 pt-16">
            <h2 className="font-bold font-openSans text-3xl sm:text-5xl max-w-[75%]">Projects</h2>
            <h4 className="my-4 sm:mx-0 mx-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dignissimos.</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 mx-8">
                <Project mobileSrc={websiteMobile} desktopSrc={websiteDesktop}/>
                <Project mobileSrc={websiteMobile} desktopSrc={websiteDesktop}/>
            </div>
            <button className="rounded-2xl bg-lightGreen py-1 px-2 my-4 font-openSans text-white font-bold text-xl hover:bg-darkGreen focus:bg-darkGreen focus:outline-none focus:ring focus:ring-white sm:text-3xl">Github</button>
        </section>
    )
}