import React ,{ useContext }from 'react'
import { context, useGlobal } from './Context';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';

// const HeroSection = ({name,img}) => {
  //  const Firstname=useContext(context);
  // const {fname ,age}=useGlobal();
  
  const HeroSection = () => {
    const {name , image} = useGlobal();
  return (
    <>
      <Wrapper>

        <div className="container grid grid-two-col">
          <div className="section-hero-data">
            <p className='hero-top-data'>This Is Me</p>
            <h1 className='hero-heading'>{name}</h1>
            <p className='hero-para'>My name is {name} and My age is  sit amet consectetur adipisicing elit. Officiis, culpa. edit temporibus ex ut esse doloribus labore magnam assumenda.</p>
              <Button className='btn hireme-btn'>
            <NavLink to='/contact'>Hire Me</NavLink>
          </Button>
          </div>
        
          <div className="section-hero-image">
          {/*for Images  */}
            <picture>
              <img className='hero-img' src={image} width='60%' height='70%' alt="headerImage" />
            </picture>
          </div>
        </div>
      </Wrapper>

    </>
  )
};

const Wrapper = styled.section`
  padding:9rem 0;

  .section-hero-data{
    display:flex;
    flex-direction:column;
    justify-content:center;
  }
  .btn{
    max-width:16rem;
  }

  .hero-top-data{
    text-decoration:uppercase;
    font-weight:500;
    font-size:1.5rem;
    color:${({ theme }) => theme.color.helper};

  }
  .hero-heading{
    // text-align:center;
    font-size:6.4rem;
  }
  .hero-para{
    margin-top: 1.5rem;
    margin-bottom:3.4rem;
    max-width: 60rem;

  }
  .section-hero-image{
    display:flex;
    justify-content:center;
    align-items:center;
  }
  picture{
    text-align:center;
  }

  .hero-img{
    max-width:80%;
  }
`;

export default HeroSection