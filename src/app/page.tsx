import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from '@/components/Header'
import HomeSection from '@/components/HomeSection'
import SoicalIcons from '@/components/SoicalIcons'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import WorkExperience from '@/components/WorkExperience'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <SoicalIcons />
      <Header />
      <HomeSection />
      <About />
      <Portfolio />
      <Skills />
      <WorkExperience />
      <Contact />
      <Footer />
    </>
  )
}
