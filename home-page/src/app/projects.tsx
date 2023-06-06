import { Project } from "@/components/Project";

import websiteDesktop from "@/assets/websiteDesktop.png"
import websiteMobile from "@/assets/websiteMobile.png"

export function Projects(){
    return (
        <section className="">
            <h2 className="font-bold font-openSans text-3xl sm:text-5xl max-w-[75%]">Projects</h2>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dignissimos.</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 mx-8">
                <Project mobileSrc={websiteMobile} desktopSrc={websiteDesktop}/>
                <Project mobileSrc={websiteMobile} desktopSrc={websiteDesktop}/>
            </div>
        </section>
    )
}