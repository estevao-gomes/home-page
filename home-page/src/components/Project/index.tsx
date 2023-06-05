import Image from 'next/image'

import desktop from '@/assets/desktop.png'
import mobile from '@/assets/mobile1.png'

export function Project(){
    return(
        <div className='relative'>
            <Image src={desktop} alt="Image of a desktop"/>
            <Image src={mobile} alt="Image of a desktop" className='absolute bottom-0 right-10 z-10 max-w-[25%]'/>
        </div>
    )
}