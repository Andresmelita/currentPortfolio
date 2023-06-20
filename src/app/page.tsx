import HomePage from '@/components/HomePage'
import Image from 'next/image'
import RootLayout from './layout'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className='p-0 m-0'>
      <HomePage/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}
