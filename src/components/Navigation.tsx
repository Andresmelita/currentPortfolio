import Link from 'next/link'
import React from 'react'
import logo from '../assets/images/logo.svg'
import Image from 'next/image'

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
}, {
  label: 'Projects',
  route: '/projects'
}, {
  label: 'Skills',
  route: '/skills'
}, {
  label: 'Contact',
  route: '/contact'
}]

const Navigation = () => {
  return (
    <div className='z-50 fixed scrolling h-[80px] w-[100%] text-[#fff]'>
      <div className='relative h-[100%]'>
        <div className='container-logo animate__animated animate__fadeInDown absolute animate__repeat-1 w-[80px] h-[100px] top-0 bg-black ml-[50px] rounded-b-lg flex items-end pb-3'>
          <div className='logo w-[100%] justify-center flex'>
            <Image src={logo} alt='' width={50} className='logo'></Image>
          </div>
        </div>
        <div className='shadow-text menu animate__animated animate__fadeIn ml-[200px] gap-14 flex items-center h-full text-[20px]'>
          {links.map(({ label, route }) => (
            <div key={route} className='hover:underline hover:underline-offset-8 ease-in-out duration-300 hover:scale-110'>
                <Link href={route}>{label}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navigation 