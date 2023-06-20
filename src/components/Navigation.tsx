import Link from 'next/link'
import React from 'react'
import logo from '../assets/images/logo00.png'
import Image from 'next/image'

const Navigation = () => {
  return (
    <div className='z-50 fixed scrolling h-[80px] w-[100%] text-[#fff]'>
      <div className='relative h-[100%]'>
        <div className='absolute w-[80px] h-[100px] top-0 bg-black ml-[50px] rounded-b-lg flex items-end pb-3'>
          <div className='w-[100%] justify-center flex'>
            <Image src={logo} alt='' width={50} className='logo'></Image>
          </div>
        </div>
        <div className='ml-[200px] gap-14 flex items-center h-full text-[20px]'>
          <Link href="#home" className='hover:underline hover:underline-offset-8 ease-in-out duration-300 hover:scale-110'>Home</Link>
          <Link href="#about" className='hover:underline hover:underline-offset-8 ease-in-out duration-300 hover:scale-110'>About</Link>
          <Link href="#projects" className='hover:underline hover:underline-offset-8 ease-in-out duration-300 hover:scale-110'>Projects</Link>
          <Link href="#skills" className='hover:underline hover:underline-offset-8 ease-in-out duration-300 hover:scale-110'>Skills</Link>
          <Link href="#contact" className='hover:underline hover:underline-offset-8 ease-in-out duration-300 hover:scale-110'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation 