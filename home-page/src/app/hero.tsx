import Image from 'next/image'
import heroImage from '@/assets/heroImage.jpg'

export function Hero() {
  return (
    <section className="relative flex h-screen">
      <div className='absolute aspect-square w-1/3 top-1/4 left-[16.67%] rounded-full border-2 overflow-hidden'>
        <Image src={heroImage} alt="Hero Image" fill/>
      </div>
      <div className="h-full w-1/3 bg-lightGreen"></div>
      <div className="h-full w-2/3 bg-bgGreen">
        
      </div>
    </section>
  );
}
