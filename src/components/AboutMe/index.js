import React from 'react'
import { FirstWordStyle, SecondWordStyle, WelcomeWrapper } from '../WelcomeComponent/Welcome.styled'
import { TextWrapper, TitleStyleAboutMe } from './AboutMe.styled'

const AboutMe = () => {
    return (
        <WelcomeWrapper>
            <div>
                <TitleStyleAboutMe>
                    <FirstWordStyle>About</FirstWordStyle>
                    <SecondWordStyle>Me</SecondWordStyle>
                </TitleStyleAboutMe>

                <TextWrapper>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... Read more
                </TextWrapper>
            </div>
            <img src='/images/AboutMe.svg' alt='welcome' width='700px' style={{ zIndex: 1000, position: 'absolute', right: '120px', top: '150px' }} />
            <img src='/images/doodleAboutMe.svg' alt='welcome' width='600px' style={{ position: 'absolute', right: '120px', top: '150px' }} />
            <img src='/images/arrow.svg' alt='welcome' width='50px' style={{ position: 'absolute', left: '20px', bottom: '50px' }} />

        </WelcomeWrapper>
    )
}

export default AboutMe