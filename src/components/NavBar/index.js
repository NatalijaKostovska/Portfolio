import React from 'react'
import Navigation from '../Navigation'
import { LogoStyle, NavBarWrapper } from './Navbar.styled'


const NavBar = () => {
    return (
        <NavBarWrapper>
            <LogoStyle>Portfolio</LogoStyle>
            <div>
                <Navigation />
            </div>
        </NavBarWrapper>
    )
}

export default NavBar