import React from 'react'
import HeroSection from './HeroSection'
import { useEffect } from 'react';
import { useGlobal } from './Context';
const About = () => {
  // const data={
  //   name: "Biswajit Nanda",
  //   img:"./Images/About.svg",
    
  // }
  const {updateAbout} = useGlobal();

  useEffect(()=>{
    updateAbout();
  },[])
  return (
    // <HeroSection {...data}/>
    <HeroSection/>
  )
}

export default About