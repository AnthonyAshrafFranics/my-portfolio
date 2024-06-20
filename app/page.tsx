"use client"
import Hero from '@/_components/Hero'
import MobileNav from '@/_components/MobileNav'
import Nav from '@/_components/Nav'
import React, { useState } from 'react'

const Home = () => {
  const [nav, setNav] = useState<boolean>(false)
  const handleNav = () => setNav(!nav);
  return (
    <div className='overflow-x-hidden'>
      <div>
        <Nav handleNav={handleNav}/>
        <MobileNav nav={nav} handleNav={handleNav}/>
        <Hero/>
      </div>
    </div>
  )
}

export default Home