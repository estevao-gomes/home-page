'use client'
import { useState } from 'react'
import { Button } from "@/components/Button";

export function Navbar(){
    const [menuClicked, setMenuClicked] = useState(false)
    return(
        <nav className="w-full sticky flex bg-bgGreen z-10">
            <div className="flex w-1/3 bg-lightGreen"><h1 className="self-center ml-8 text-white font-bold text-2xl">LG</h1></div>
            <div className="flex flex-col fixed sm:static top-0 right-0 w-min h-fit sm:flex-row items-end sm:w-2/3 bg-bgGreen pr-2">
                <button onClick={()=>{setMenuClicked((oldMenu)=>!oldMenu)}} className="rounded-2xl bg-lightGreen py-1 px-2 my-1 font-openSans text-white font-bold text-xl hover:bg-darkGreen focus:bg-darkGreen focus:outline-none focus:ring focus:ring-white sm:hidden">Menu</button>
                <div className={menuClicked ? `w-min h-max` : `hidden sm:flex justify-around w-full` }>
                    <Button text="home"/>
                    <Button text="home"/>
                    <Button text="home"/>
                    <Button text="home"/>
                    <Button text="home"/>
                </div>
            </div>
        </nav>
    )
}