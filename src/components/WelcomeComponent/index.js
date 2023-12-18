import React from 'react'
import { ButtonWrapper, ButtonsWrapper, FirstWordStyle, SecondWordStyle, SecondaryButtonWrapper, TitleStyle, WelcomeWrapper } from './Welcome.styled'

const WelcomeComponent = () => {
    return (
        <WelcomeWrapper>
            <div>
                <TitleStyle>
                    <FirstWordStyle>Web</FirstWordStyle>
                    <SecondWordStyle>Developer</SecondWordStyle>
                </TitleStyle>

                <ButtonsWrapper>
                    <ButtonWrapper>Hire me</ButtonWrapper>
                    <SecondaryButtonWrapper>Download CV</SecondaryButtonWrapper>
                </ButtonsWrapper>
            </div>
            <img src='/images/WelcomeImage.svg' alt='welcome' width='500px' style={{ zIndex: 1000, position: 'absolute', right: '120px', top: '40px' }} />
            <img src='/images/doodles.svg' alt='welcome' width='400px' style={{ position: 'absolute', right: '120px', top: '40px' }} />
            <img src='/images/downArrow.svg' alt='welcome' width='360px' style={{
                position: 'absolute', left: '350px', bottom: '0',
                width: '90px'
            }} />

        </WelcomeWrapper>
    )
}

export default WelcomeComponent