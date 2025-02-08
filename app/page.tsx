"use client";
import About from "@/_components/About";
import Approach from "@/_components/Approach";
import Contact from "@/_components/Contact";
import Footer from "@/_components/Footer";
import Hero from "@/_components/Hero";
import MobileNav from "@/_components/MobileNav";
import Nav from "@/_components/Nav";
import Services from "@/_components/Services";
import Skills from "@/_components/Skills";
import React, { useRef, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";

const Home = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleNav = () => setNav(!nav);
  const aboutRef = useRef();
  const homeRef = useRef();
  const serviceRef = useRef();
  const skillRef = useRef();
  const approachRef = useRef();
  const contactRef = useRef();
  return (
    <div className="overflow-x-hidden">
      <div>
        <Nav
          handleNav={handleNav}
          aboutRef={aboutRef}
          homeRef={homeRef}
          serviceRef={serviceRef}
          skillRef={skillRef}
          approachRef={approachRef}
          contactRef={contactRef}
        />
        <MobileNav nav={nav} handleNav={handleNav} />
        <Hero homeRef={homeRef} />
        <div className="relative z-[30]">
          <About aboutRef={aboutRef} />
          <Services serviceRef={serviceRef} />
          <Skills skillRef={skillRef} />
          <Approach approachRef={approachRef} />
          <Contact contactRef={contactRef} />
          <Footer />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Home;
