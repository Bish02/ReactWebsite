import React, { useEffect } from 'react'
import Contact from './Contact';
import { useGlobal } from './Context';

import HeroSection from './HeroSection'
import Services from './Services';
const Home = () => {

  // const data = {
  //   name: "blogsInfinity",
  //   img: "/Images/header.svg",

  // }
  const { updateHome } = useGlobal();
  useEffect(() => {
    updateHome();
  }, [])
  return (
    // <HeroSection {...data} />
    <>
      <HeroSection />
      <Services />
      <Contact/>
      

    </>
  )
};

export default Home