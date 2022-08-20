import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'
import styled from 'styled-components'

const Header = () => {
  return (
    <>
    <Mainheader>
      <NavLink to='/'>
        <img src="./Images/img-2.png" width='80px' height='80px' alt="image" />
      </NavLink>
      <Nav/>
    </Mainheader>
    </>
  )
};

const Mainheader=styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color:${({theme})=> theme.color.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;

`;
export default Header