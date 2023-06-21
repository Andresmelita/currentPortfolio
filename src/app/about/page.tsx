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
        className="absolute -z-20"
      >
      </Image>
    </div>
  )
}

export default page