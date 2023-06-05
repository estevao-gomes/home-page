'use client'
import { useState } from 'react'
import { Button } from "@/components/Button";

export function Navbar(){
    const [menuClicked, setMenuClicked] = useState(false)
    return(
        <nav className="w-full fixed flex bg-bgGreen z-10">
            <div className="flex w-1/3 py-2 bg-lightGreen"><h1 className="self-center ml-8 text-white font-bold text-2xl">LG</h1></div>
            <div className="flex py-2 flex-col fixed sm:static top-0 right-0 w-min h-fit sm:flex-row items-end sm:w-2/3 bg-bgGreen pr-2">
                <button onClick={()=>{setMenuClicked((oldMenu)=>!oldMenu)}} className="rounded-2xl bg-lightGreen py-1 px-2 my-1 font-openSans text-white font-bold text-xl hover:bg-darkGreen focus:bg-darkGreen focus:outline-none focus:ring focus:ring-white sm:hidden">Menu</button>
                <ul className={menuClicked ? `w-min h-max` : `hidden sm:flex justify-around w-full` }>
                    <li><Button text="home"/></li>
                    <li><Button text="home"/></li>
                    <li><Button text="home"/></li>
                    <li><Button text="home"/></li>
                    <li><Button text="home"/></li>
                </ul>
            </div>
        </nav>
    )
}