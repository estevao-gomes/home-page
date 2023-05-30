import Image from 'next/image'
import heroImage from '@/assets/heroImage.jpg'

export function Hero() {
  return (
    <section className="relative flex h-screen">
      <div className='absolute aspect-square max-w-[300px] sm:max-w-none sm:w-1/3 w-2/3 top-[15%] sm:left-[16.67%] rounded-full border-8 border-lightGreen shadow-lg overflow-hidden'>
        <Image src={heroImage} alt="Hero Image" fill priority/>
      </div>
      <div className="h-full w-1/3 bg-lightGreen"></div>
      <div className="h-full w-2/3 bg-bgGreen flex justify-center items-end sm:items-center">
        <h1 className="text-3xl font-openSansCondensed font-bold sm:ml-40 mb-16">
          Lorem ipsum,
          <p className='font-openSans text-6xl text-lightGreen'>LOREM IPSUM</p>
          Lorem Ipsum
        </h1>
      </div>
    </section>
  );
}
