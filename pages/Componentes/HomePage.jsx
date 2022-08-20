import React from 'react';
import Image from 'next/image';
import Face2 from '../../public/face2.jpg';

function HomePage() {
  return (
      <>
          <div className="flex justify-center text-center md:mx-20 md:pt-32 pt-28">
              <div className='w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block'>
                  <Image className="rounded-full cursor-pointer hidden md:block" layout='fill' objectFit="cover" src={Face2} alt="Foto"/>
              </div>
          </div>
    </>
  )
}

export default HomePage