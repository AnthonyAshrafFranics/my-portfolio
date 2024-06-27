"use client"
import About from '@/_components/About'
import Approach from '@/_components/Approach'
import Contact from '@/_components/Contact'
import Footer from '@/_components/Footer'
import Hero from '@/_components/Hero'
import MobileNav from '@/_components/MobileNav'
import Nav from '@/_components/Nav'
import Services from '@/_components/Services'
import Skills from '@/_components/Skills'
import React, { useRef, useState } from 'react'

const Home = () => {
  const [nav, setNav] = useState<boolean>(false)
  const handleNav = () => setNav(!nav);
  const aboutRef = useRef();
  return (
    <div className='overflow-x-hidden'>
      <div>
        <Nav handleNav={handleNav} aboutRef={aboutRef}/>
        <MobileNav nav={nav} handleNav={handleNav}/>
        <Hero/>
        <div className='relative z-[30]'>
          <About aboutRef={aboutRef}/>
          <Services/>
          <Skills/>
          <Approach/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Home