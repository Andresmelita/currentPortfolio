import Image from 'next/legacy/image'
import background from '../../assets/images/mountain.jpg'
import React from 'react'

const page = () => {
  return (
    <div className='relative w-[100vw] h-[100vh]'>
      <Image
        src={background}
        alt=""
        objectFit="cover"
        layout="fill"
        className="absolute -z-20 brightness-[0.75]" 
      >
      </Image>
      <div
        id="home"
        className="relative h-[100vh] flex justify-center items-center"
      >
        <div className="w-[50%] bg-slate-200">Apartado A</div>
        <div className="w-[50%] bg-black">Apartado B</div>
      </div>
    </div>
  )
}

export default page