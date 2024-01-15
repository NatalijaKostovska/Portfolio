import React from 'react'
import { FirstWordStyle, SecondWordStyle, WelcomeWrapper } from '../WelcomeComponent/Welcome.styled'
import { ProductsCards, ProjectCard, Tag, TagsWrapper, WorkWrapper } from './Works.styled'
import { TitleStyleAboutMe } from '../AboutMe/AboutMe.styled'

const Works = () => {
    return (
        <WorkWrapper>
            <div>
                <TitleStyleAboutMe>
                    <FirstWordStyle>My recent</FirstWordStyle>
                    <SecondWordStyle>works</SecondWordStyle>
                </TitleStyleAboutMe>
                <div>
                    <TagsWrapper>
                        <Tag>tag1</Tag>
                    </TagsWrapper>
                    <ProductsCards>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </ProductsCards>
                </div>
            </div>
        </WorkWrapper>
    )
}

export default Works