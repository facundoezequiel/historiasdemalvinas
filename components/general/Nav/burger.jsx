import React, { useState } from 'react';
import styled from 'styled-components';
import { Sling as Hamburger } from 'hamburger-react'
import RightNav from "./rightnav"
import { breakpoints } from "@/constants/media";

const StyledBurger = styled.div`
    z-index: 20;
    display: none;

    @media (max-width: ${breakpoints.tablet}) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
    }
`;

const Burger = () => {
  const [isOpen, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger>
        <Hamburger toggled={isOpen} toggle={setOpen} className="hamburger"/>
      </StyledBurger>
      <RightNav open={isOpen}/>
    </>
  )
}

export default Burger
