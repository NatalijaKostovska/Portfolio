import React from 'react'
import Navigation from '../Navigation'
import { LogoStyle, NavBarWrapper } from './Navbar.styled'


const NavBar = ({ toggleTheme }) => {
    return (
        <NavBarWrapper>
            <LogoStyle>Portfolio</LogoStyle>
            <div>
                <Navigation toggleTheme={toggleTheme} />
            </div>
        </NavBarWrapper>
    )
}

export default NavBar