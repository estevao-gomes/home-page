import Image, { StaticImageData } from 'next/image'
import desktop from '@/assets/desktop.png'
import mobile from '@/assets/mobile1.png'

export function Project({desktopSrc, mobileSrc}:{desktopSrc:StaticImageData, mobileSrc:StaticImageData}){

    return(
        <div className='relative'>
            <Image src={desktop} width={500} height={300} alt="Image of a desktop"/>
            <Image src={mobile} alt="Image of a desktop" className='absolute bottom-0 right-10 max-w-[25%]'/>
            {/* <Image src={desktopSrc} alt="Image of project site" className='absolute z-20 top-0'/>
            <Image src={mobileSrc} alt="Image of project site on mobile" className='absolute z-20 bottom-0 right-0' /> */}
        </div>
    )
}