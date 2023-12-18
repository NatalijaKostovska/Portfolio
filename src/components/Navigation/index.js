import React from 'react'
import { NavigationMenu, NavigationWrapper } from './NavigationWrapper.styled'

const Navigation = () => {
    return (
        <NavigationWrapper>
            <NavigationMenu>Home</NavigationMenu>
            <NavigationMenu>About me</NavigationMenu>
            <NavigationMenu>Contact</NavigationMenu>
        </NavigationWrapper>
    )
}

export default Navigation