import React from 'react'
import { NavigationMenu, NavigationWrapper } from './NavigationWrapper.styled'
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { useSelector } from 'react-redux';

const Navigation = ({ toggleTheme }) => {
    const { theme } = useSelector((state) => state.theme)

    return (
        <NavigationWrapper>
            {theme ?
                <FaRegMoon onClick={toggleTheme} />
                : <GoSun onClick={toggleTheme} />}
            <NavigationMenu>Home</NavigationMenu>
            <NavigationMenu>About me</NavigationMenu>
            <NavigationMenu>Contact</NavigationMenu>
        </NavigationWrapper>
    )
}

export default Navigation